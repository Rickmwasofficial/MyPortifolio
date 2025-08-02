import React from 'react';

interface IconProps {
  className?: string;
}

export const PythonIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" fill="#3776AB" />
    <path d="M15.5 14.8c.8-.8 1.2-1.8 1.2-2.8s-.4-2-1.2-2.8c-.8-.8-1.8-1.2-2.8-1.2H9v8h3.7c1 0 2-.4 2.8-1.2zM12.2 10.5h1.5c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4s-.2 1-.6 1.4c-.4.4-.9.6-1.4.6h-1.5v-4z" fill="#FFD43B" />
    <path d="M8.5 9.2c-.8.8-1.2 1.8-1.2 2.8s.4 2 1.2 2.8c.8.8 1.8 1.2 2.8 1.2H15V9H8.3c-1 0-2 .4-2.8 1.2zM11.8 13.5H10.3c-.5 0-1-.2-1.4-.6-.4-.4-.6-.9-.6-1.4s.2-1 .6-1.4c.4-.4.9-.6 1.4-.6h1.5v4z" fill="#FFD43B"/>
  </svg>
);
export const KotlinIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><path fillRule="evenodd" clipRule="evenodd" d="M24 24H0V0h24L12 12 24 24z" fill="url(#kotlin_icon)"/><defs><linearGradient id="kotlin_icon" x1="18.97" y1="20.03" x2="3.14" y2="2.32" gradientUnits="userSpaceOnUse"><stop stopColor="#E44857"/><stop offset=".5" stopColor="#C711E1"/><stop offset="1" stopColor="#7F52FF"/></linearGradient></defs></svg>
);
export const JavaScriptIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M0 0h24v24H0V0z" fill="#F7DF1E"/><path d="M8.4 15.3h1.9l1.1-1.9c.2-.3.3-.6.4-.8h.1c-.1.3-.1.6-.1 1v1.7h1.8V8.7h-1.9l-1.1 2c-.2.3-.3.6-.4.8h-.1c.1-.3.1-.5.1-.8V8.7H8.4v6.6zm7.5 0h1.9v-2.7h.1c.2.8.9 1.3 1.8 1.3.2 0 .4 0 .5-.1v-1.8c-.2.1-.4.1-.7.1-.8 0-1.3-.4-1.5-1.2h-.1V8.7h-1.9v6.6z" fill="#000"/></svg>
);
export const HTMLIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3h18v18H3V3z" fill="#E34F26"/><path d="M12 5v14l6-3.3V8.3L12 5z" fill="#F16529"/><path d="M12 12v3.7l3 .9V12h-3z" fill="#EBEBEB"/><path d="M12 7.7v3.3h3V7.7l-3 .1z" fill="#EBEBEB"/><path d="M8 9h4v2H9.5l.2 2H12v2H8l-.5-4.5L8 9z" fill="#EBEBEB"/><path d="M8 15h2.2l.2-2H8v2z" fill="#EBEBEB"/></svg>
);
export const CSSIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3h18v18H3V3z" fill="#1572B6"/><path d="M12 5v14l6-3.3V8.3L12 5z" fill="#33A9DC"/><path d="M12 12v3.7l3 .9V12h-3z" fill="#FFF"/><path d="M12 7.7v3.3h3V7.7l-3 .1z" fill="#FFF"/><path d="M8 9h4v2H9.5l.2 2H12v2H8l-.5-4.5L8 9z" fill="#FFF"/><path d="M8 15h2.2l.2-2H8v2z" fill="#FFF"/></svg>
);
export const ReactIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><circle r="2.05" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="1"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
);
export const JetpackComposeIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="#4285F4"/><path d="M12 7.5L7.5 12l4.5 4.5V12h4.5V7.5H12z" fill="#3DDC84"/><path d="M12 16.5L16.5 12l-4.5-4.5V12H7.5v4.5H12z" fill="#00C853"/></svg>
);
export const TensorFlowIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 3h12v3.6L15.3 9 18 11.4V15L12 18l-6-3v-3.6L8.7 9 6 6.6V3z" fill="#FF6F00"/><path d="M12 18l-6-3v-3.6l2.1-1.6L12 13.2V18z" fill="#FFA000"/><path d="M12 10.5l-6-4.5v3.6L8.7 9 12 10.5z" fill="#FFA000"/></svg>
);
export const NodejsIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="#339933"/><path d="M10.4 16.6l-1.3-6.5h2.1l.6 3.1c.1.7.2 1.3.3 1.9h.1c.1-.6.2-1.2.3-1.9l.6-3.1h2.1l-1.3 6.5-1.1 5.1h-2.2l-1.2-5.1z" fill="#FFF"/></svg>
);
export const GitIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.5 10.5c-.8-.8-10.4-3-12-3s-3.8 6.8-3 7.5c.8.8 10.5 3 12 3s3.7-6.7 3-7.5zm-1.5 6c-.8.8-9 2.2-10.5 2.2-2.2 0-3-1.5-3-3s.8-3 3-3c1.5 0 9.8 1.5 10.5 2.2.8.8.8 1.5 0 2.3z" fill="#F05033"/><path d="M19.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-6-4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-6 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#F05033"/></svg>
);
export const GitHubIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.203 11.387.6.112.82-.262.82-.587v-2.05c-3.337.725-4.037-1.612-4.037-1.612-.544-1.388-1.33-1.75-1.33-1.75-1.088-.744.08-.73.08-.73 1.205.087 1.838 1.237 1.838 1.237 1.07 1.833 2.806 1.304 3.494.997.106-.775.418-1.304.762-1.604-2.662-.3-5.462-1.333-5.462-5.93 0-1.31.468-2.383 1.236-3.22-.124-.304-.536-1.525.116-3.176 0 0 1.006-.322 3.3 1.23.956-.266 1.98-.4 3.004-.404 1.024.004 2.048.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.65.242 2.872.118 3.176.77.837 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.824 1.1.824 2.22v3.294c0 .324.22.694.825.575A12.006 12.006 0 0024 12c0-6.63-5.37-12-12-12z" fill="#181717"/></svg>
);
export const MongoDBIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.2 13.1c-.3.4-.7.6-1.3.6h-2c-.4 0-.6-.1-.8-.3-.2-.2-.2-.4-.2-.7 0-.3.1-.6.2-.8.2-.2.4-.3.8-.3h.4c.5 0 .9-.1 1.2-.4s.5-.6.5-.9c0-.4-.1-.7-.3-.9-.2-.2-.6-.3-.9-.3s-.7.1-1.1.4l-.5-1.5c.5-.3 1-.5 1.6-.5.7 0 1.3.2 1.7.5.4.3.7.8.7 1.4 0 .5-.2.9-.4 1.3-.2.4-.6.7-1 .9.5.1 1 .4 1.3.8.3.4.5.9.5 1.5 0 .6-.2 1.1-.6 1.5z" fill="#47A248"/></svg>
);
export const AndroidStudioIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="#3DDC84"/><path d="M16.5 18.5l-4.5-2-4.5 2v-13l9 6.5z" fill="#00C853"/><path d="M7.5 5.5v13l4.5-2v-13l-4.5-2z" fill="#00A143"/></svg>
);
export const ExpressIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M8.2 10.1l-1.5 3.3h1.6l.7-1.5h1.5v1.5h1.5v-5h-3.9l.1 1.7zm1.5.8h-.7l-.3-1h.9l.1 1zM14.5 10l-1.5 4.8h1.6l.3-1h1.5l.3 1h1.6L16.5 10h-2zm1 3.3h-1l.5-1.8.5 1.8z"/></svg>
);
export const LangChainIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.7 13.3c.2.2.3.4.3.7s-.1.5-.3.7c-.2.2-.4.3-.7.3s-.5-.1-.7-.3l-4-4c-.2-.2-.3-.4-.3-.7s.1-.5.3-.7l4-4c.2-.2.4-.3.7-.3s.5.1.7.3c.2.2.3.4.3.7s-.1.5-.3.7L7.4 9.3l3.3 3.3zm2.6-2.6c.2-.2.4-.3.7-.3s.5.1.7.3l4 4c.2.2.3.4.3.7s-.1.5-.3.7l-4 4c-.2.2-.4.3-.7.3s-.5-.1-.7-.3c-.2-.2-.3-.4-.3-.7s.1-.5.3-.7l3.3-3.3-3.3-3.3c-.2-.2-.3-.4-.3-.7s.1-.5.3-.7z"/></svg>
);
export const OpenAIIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.8 9.5c.2-.5.3-1 .3-1.6 0-3.3-2.7-6-6-6S9.1 4.6 9.1 8v.2c0 .3.1.6.2.9.2.5.3 1 .3 1.6 0 3.3 2.7 6 6 6s5.9-2.7 6.2-6v-.2zM15.1 12c-.5-1-1.4-1.7-2.5-1.7s-2 .7-2.5 1.7c-.3-.6-.5-1.3-.5-2.1 0-1.6.6-3 1.6-4 .2-.2.4-.3.7-.3s.5.1.7.3c1 .9 1.6 2.3 1.6 4 0 .8-.2 1.5-.5 2.1z" fill="#43A047"/><path d="M14.9 14.5c-.2.5-.3 1-.3 1.6 0 3.3-2.7 6-6 6s-6-2.7-6-6v-.2c0-.3.1-.6.2-.9.2-.5.3-1 .3-1.6 0-3.3 2.7-6 6-6s5.9 2.7 6.2 6v.2zM8.9 18c.5 1 1.4 1.7 2.5 1.7s2-.7 2.5-1.7c.3.6.5 1.3.5 2.1 0 1.6-.6 3-1.6 4-.2.2-.4.3-.7.3s-.5-.1-.7-.3c-1-.9-1.6-2.3-1.6-4 0-.8.2-1.5.5-2.1z" fill="#43A047"/></svg>
);
export const TailwindCssIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 13.5c-1.2 0-2.2-.5-3-1.4-1-1-1.5-2.2-1.5-3.6s.5-2.6 1.5-3.6c.8-.9 1.8-1.4 3-1.4 1.3 0 2.4.5 3.2 1.5.8 1 1.2 2.2 1.2 3.5 0 .8-.1 1.5-.4 2.1-.3.6-.7 1.1-1.2 1.5s-1.1.6-1.8.6zm4.5-5c-1.2 0-2.2-.5-3-1.4-1-1-1.5-2.2-1.5-3.6s.5-2.6 1.5-3.6c.8-.9 1.8-1.4 3-1.4 1.3 0 2.4.5 3.2 1.5.8 1 1.2 2.2 1.2 3.5 0 .8-.1 1.5-.4 2.1-.3.6-.7 1.1-1.2 1.5s-1.1.6-1.8.6z" fill="#38BDF8"/></svg>
);
export const CodeFileIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="m10 13-2 2 2 2" />
        <path d="m14 17 2-2-2-2" />
    </svg>
);
