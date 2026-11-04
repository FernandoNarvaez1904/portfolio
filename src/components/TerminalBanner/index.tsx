export interface TerminalBannerProps { name: string; about: string; className?: string; }
export default function TerminalBanner({name, about, className}: TerminalBannerProps) {
 return <div className={`profile-intro ${className || ''}`}><p>Full-stack developer</p><h1>{name}</h1><p>{about}</p></div>;
}
