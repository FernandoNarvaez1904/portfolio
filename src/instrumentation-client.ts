const campaign = new URLSearchParams(window.location.search);
const fromCv = campaign.get('utm_source') === 'cv';
let continuingCvVisit = false;
try {
  continuingCvVisit = sessionStorage.getItem('cv-referral') === 'true';
  if (fromCv) sessionStorage.setItem('cv-referral', 'true');
} catch {
  // Analytics also works when browser storage is unavailable.
}

if (fromCv || continuingCvVisit) {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
  if (key && host) {
    void import('posthog-js').then(({ default: posthog }) => {
      posthog.init(key, {
        api_host: host,
        ui_host: 'https://us.posthog.com',
        capture_pageview: 'history_change',
        autocapture: false,
        person_profiles: 'always',
        disable_surveys: true,
        session_recording: { maskAllInputs: true, maskTextSelector: '.contact-form' },
        loaded(client) {
          client.register({ website: 'portfolio', referral_source: 'cv' });
          client.startSessionRecording({ sampling: true, url_trigger: true, event_trigger: true });
          if (!fromCv) return;
          const sessionId = client.get_session_id();
          const notificationKey = `cv-notified:${sessionId}:${window.location.pathname}`;
          try {
            if (sessionStorage.getItem(notificationKey)) return;
          } catch {}
          const url = new URL(window.location.origin + window.location.pathname);
          for (const name of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content']) {
            const value = campaign.get(name);
            if (value) url.searchParams.set(name, value.slice(0, 100));
          }
          client.capture('cv_link_open', {
            utm_source: 'cv',
            utm_medium: campaign.get('utm_medium'),
            utm_campaign: campaign.get('utm_campaign'),
            utm_content: campaign.get('utm_content'),
            cv_url: url.toString(),
            cv_session_id: sessionId,
            cv_recording_url: client.get_session_replay_url(),
          }, { send_instantly: true });
          try { sessionStorage.setItem(notificationKey, 'true'); } catch {}
        },
      });
    }).catch(() => {
      // Analytics must never interrupt access to the portfolio.
    });
  }
}
