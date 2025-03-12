function operator(proxies) {
    const host = "support.snapchat.com"; // Sửa lại giá trị của host
    proxies.forEach(p => {
        p.sni = host; // Gán giá trị mới cho p.sni
    });
    return proxies;
}