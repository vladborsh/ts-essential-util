export function GetAbsolueUrl(url: string): (url: string) => string {
    let a: HTMLAnchorElement;
    
    return (url: string) => {
        if (!a) a = document.createElement('a');
        a.href = url;
        
        return a.href;
    };
}