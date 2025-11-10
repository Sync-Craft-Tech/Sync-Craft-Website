import './App.css'


import ContactUsComponents from './components/custom/ContactUs.components';
import ProjectDisplayComponents from './components/custom/ProjectDisplay.components';


function App() {

  return (
    <>
      {/* ====================== HERO ====================== */}
      <section id="Home"className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="hero px-4 md:px-6">
          <div className="absolute z-0 inset-0 overflow-hidden opacity-20">
            <svg id="background-svg" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'><rect fill='#ffffff' width='2000' height='1500' /><defs><rect stroke='#ffffff' stroke-width='0.4' width='1' height='1' id='s' /><pattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='rotate(29 1000 750) scale(28.65) translate(-965.1 -723.82)'><use fill='#fcfcfc' href='#s' y='2' /><use fill='#fcfcfc' href='#s' x='1' y='2' /><use fill='#fafafa' href='#s' x='2' y='2' /><use fill='#fafafa' href='#s' /><use fill='#f7f7f7' href='#s' x='2' /><use fill='#f7f7f7' href='#s' x='1' y='1' /></pattern><pattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='rotate(29 1000 750) scale(28.65) translate(-965.1 -723.82)'><g fill='#f5f5f5'><use href='#s' /><use href='#s' y='5' /><use href='#s' x='1' y='10' /><use href='#s' x='2' y='1' /><use href='#s' x='2' y='4' /><use href='#s' x='3' y='8' /><use href='#s' x='4' y='3' /><use href='#s' x='4' y='7' /><use href='#s' x='5' y='2' /><use href='#s' x='5' y='6' /><use href='#s' x='6' y='9' /></g></pattern><pattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='rotate(29 1000 750) scale(28.65) translate(-965.1 -723.82)'><g fill='#f5f5f5'><use href='#s' y='5' /><use href='#s' y='8' /><use href='#s' x='1' y='1' /><use href='#s' x='1' y='9' /><use href='#s' x='1' y='12' /><use href='#s' x='2' /><use href='#s' x='2' y='4' /><use href='#s' x='3' y='2' /><use href='#s' x='3' y='6' /><use href='#s' x='3' y='11' /><use href='#s' x='4' y='3' /><use href='#s' x='4' y='7' /><use href='#s' x='4' y='10' /></g></pattern><pattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='rotate(29 1000 750) scale(28.65) translate(-965.1 -723.82)'><g fill='#f2f2f2'><use href='#s' y='11' /><use href='#s' x='2' y='9' /><use href='#s' x='5' y='12' /><use href='#s' x='9' y='4' /><use href='#s' x='12' y='1' /><use href='#s' x='16' y='6' /></g></pattern><pattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='rotate(29 1000 750) scale(28.65) translate(-965.1 -723.82)'><g fill='#ffffff'><use href='#s' y='9' /><use href='#s' x='16' y='5' /><use href='#s' x='14' y='2' /><use href='#s' x='11' y='11' /><use href='#s' x='6' y='14' /></g><g fill='#efefef'><use href='#s' x='3' y='13' /><use href='#s' x='9' y='7' /><use href='#s' x='13' y='10' /><use href='#s' x='15' y='4' /><use href='#s' x='18' y='1' /></g></pattern><pattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='rotate(29 1000 750) scale(28.65) translate(-965.1 -723.82)'><g fill='#7F22FE'><use href='#s' x='2' y='5' /><use href='#s' x='16' y='38' /><use href='#s' x='46' y='42' /><use href='#s' x='29' y='20' /></g></pattern><pattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='rotate(29 1000 750) scale(28.65) translate(-965.1 -723.82)'><g fill='#7F22FE'><use href='#s' x='33' y='13' /><use href='#s' x='27' y='54' /><use href='#s' x='55' y='55' /></g></pattern><pattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='rotate(29 1000 750) scale(28.65) translate(-965.1 -723.82)'><g fill='#7F22FE'><use href='#s' x='11' y='8' /><use href='#s' x='51' y='13' /><use href='#s' x='17' y='73' /><use href='#s' x='99' y='57' /></g></pattern></defs><rect fill='url(#a)' width='100%' height='100%' /><rect fill='url(#b)' width='100%' height='100%' /><rect fill='url(#h)' width='100%' height='100%' /><rect fill='url(#c)' width='100%' height='100%' /><rect fill='url(#d)' width='100%' height='100%' /><rect fill='url(#e)' width='100%' height='100%' /><rect fill='url(#f)' width='100%' height='100%' /><rect fill='url(#g)' width='100%' height='100%' /></svg>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Build Something
                  <span className="text-primary"> Amazing</span> Today
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Create beautiful, modern applications with our powerful
                  platform. Start building your next big idea with confidence
                  and style.
                </p>
              </div>

            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-primary/20 blur-3xl" />
                <div className="relative bg-muted border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <svg className="h-24 w-24 mx-auto animate-bounce"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true">
                      <circle cx="50" cy="50" r="50" className="text-primary opacity-10" fill="currentColor" />
                      <circle cx="50" cy="50" r="32" className="text-primary" fill="currentColor" />
                    </svg>
                    <p className="text-muted-foreground"> ---INSERT SOME IMAGE/LOGO like really man, its been 2 weeks :---</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Project Display Section*/}
      <ProjectDisplayComponents />
      {/* Contact Section */}
      <ContactUsComponents />
    </>
  );
}

export default App
