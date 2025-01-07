import { Heading } from "@/components/heading"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { ShinyButton } from "@/components/shiny-button"
import { Check } from "lucide-react"

export default function Page() {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <Heading>
                <span>Real-Time SaaS Insights</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">Delivered to Your Discord</span>
                </Heading>
            </div>
            
            <p className="text-base/7 text-gray-600 max-prose text-center text-pretty">
              PingPanda is the easiest way to monitor your SaaS. Get instant notifications for {" "}
              <span className="font-semibold text-gray-700">
              sales, new users, or any other envents
              </span>{" "}
              sent directly to your Discord server</p>

            <ul className="space-y-2 text-base/7 text-gray-600 max-prose text-left flex flex-col items-start text-pretty">

             {["Real-Time Discord alerts for critical events", 
              "Buy once, use forever", 
              "Track Sales, New Users, and more"]
              .map((item, index) =>(
              <li key={index} className="flex gap-1.5 items-center text-left">
                <Check className="size-5 shrink-0 text-brand-700"/>
                {item}
              </li>
             ))}
            </ul>
            <div className="w-full max-w-80">
              <ShinyButton href="/sing-up" className="realtive z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">Get Started</ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
} 