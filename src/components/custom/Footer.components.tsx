
import PrivacyPolicy from '/policies/Privacy_Policy.txt';
import TermsAndConditions from '/policies/Terms_and_Conditions.txt';
import CookiesPolicy from '/policies/Cookies_Policy.txt';

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

            {/* Columns */}
            {['Contact', 'Legal'].map((col) => (
              <div key={col} className="space-y-2 flex-1">
                <h3 className="text-sm font-semibold">{col}</h3>
                <ul className="space-y-1">
                  {(col === 'Contact'
                    ? ['admin@synccrafttech.online', '+27-66-102-4086']
                    : col === 'Legal'
                      ? ['Privacy', 'Terms', 'Cookie Policy']
                      : [])
                      .map((link) => {
                        // Contact Links
                        if (col === 'Contact' && link.includes('@')) {
                          return (
                            <li key={link}>
                              <a
                                href={`mailto:${link}`}
                                className="text-sm text-muted-foreground hover:text-foreground"
                              >
                                {link}
                              </a>
                            </li>
                          );
                        } else if (col === 'Contact' && link.startsWith('+')) {
                          return (
                            <li key={link}>
                              <a
                                href={`tel:${link}`}
                                className="text-sm text-muted-foreground hover:text-foreground"
                              >
                                {link}
                              </a>
                            </li>
                          );
                        }

                        // Legal Links
                        if (col === 'Legal') {
                          let href = '#';
                          if (link === 'Privacy') href = PrivacyPolicy;
                          if (link === 'Terms') href = TermsAndConditions;
                          if (link === 'Cookie Policy') href = CookiesPolicy;

                          return (
                            <li key={link}>
                              <a
                                href={href}
                                download
                                className="text-sm text-muted-foreground hover:text-foreground"
                              >
                                {link}
                              </a>
                            </li>
                          );
                        }

                        return null;
                      })}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 SyncCraft. All rights reserved.</p>
            <p>
              Thanks to{' '}
              <a href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/">
                Free SVG Backgrounds and Patterns by SVGBackgrounds.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponents;
