    
const FooterComponents = () => {
  return (
    <>
    {/* ====================== FOOTER ====================== */}
      <footer id="Contact" className="w-full border-t py-12 md:py-16">
        <div className="footer px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="space-y-3 flex-1">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-primary" />
                <span className="text-xl font-bold">SyncCraft</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Building amazing experiences for the modern web.
              </p>
            </div>

            {['Contact', 'Company', 'Legal'].map((col) => (
              <div key={col} className="space-y-2 flex-1">
                <h3 className="text-sm font-semibold">{col}</h3>
                <ul className="space-y-1">
                  {(col === 'Contact'
                    ? ['Email', 'Phone', 'Address']
                    : col === 'Company'
                      ? ['About']
                      : col === 'Legal'
                        ? ['Privacy', 'Terms', 'Cookie Policy']
                        : [])
                      .map((link) => (
                        <li key={link}>
                          <a
                            href="#"
                            className="text-sm text-muted-foreground hover:text-foreground"
                          >
                            {link}
                          </a>
                        </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 SyncCraft. All rights reserved.</p>
            <p>Thanks to <a href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/">Free SVG Backgrounds and Patterns by SVGBackgrounds.com</a></p>
          </div>
        </div>
      </footer>
      </>
  ) 
}

export default FooterComponents