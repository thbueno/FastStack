import { DiscordMessage } from "@/components/discord-message"
import { Heading } from "@/components/heading"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { MockDiscordUI } from "@/components/mock-discord-ui"
import { ShinyButton } from "@/components/shiny-button"
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list"
import { Check } from "lucide-react"
import Image from "next/image"

export default function Page() {
  return (
    <>
      {/* Hero  */}
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <Heading>
                <span>Real-Time SaaS Insights</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">
                  Delivered to Your Discord
                </span>
              </Heading>
            </div>

            <p className="text-base/7 text-gray-600 max-prose text-center text-pretty">
              PingPanda is the easiest way to monitor your SaaS. Get instant
              notifications for{" "}
              <span className="font-semibold text-gray-700">
                sales, new users, or any other envents
              </span>{" "}
              sent directly to your Discord server
            </p>

            <ul className="space-y-2 text-base/7 text-gray-600 max-prose text-left flex flex-col items-start text-pretty">
              {[
                "Real-Time Discord alerts for critical events",
                "Buy once, use forever",
                "Track Sales, New Users, and more",
              ].map((item, index) => (
                <li key={index} className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-brand-700" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="w-full max-w-80">
              <ShinyButton
                href="/sing-up"
                className="realtive z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl"
              >
                Get Started
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* Discord Mockup UI */}
      <section className=" relative bg-brand-25 pb-4">
        <div className="absolute inset-x-0 bottom-24 top-24 bg-brand-700" />

        <div className="relative mx-auto">
          <MaxWidthWrapper>
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <MockDiscordUI>
                <AnimatedList>
                  <AnimatedListItem>
                    <DiscordMessage
                      avatarSrc="/brand-asset-profile-picture.png"
                      avatarAlt="PingPanda Avatar"
                      username="PingPanda"
                      timestamp="Today at 12:34 PM"
                      badgeText="SignUp"
                      badgeColor="#43b581"
                      title="👤New user sign up"
                      content={{
                        name: "John Doe",
                        email: "thiago@acme.com",
                      }}
                    />
                  </AnimatedListItem>

                  <AnimatedListItem>
                    <DiscordMessage
                      avatarSrc="/brand-asset-profile-picture.png"
                      avatarAlt="PingPanda Avatar"
                      username="PingPanda"
                      timestamp="Today at 12:34 PM"
                      badgeText="Milestone"
                      badgeColor="#5865f2"
                      title="🚀 Revenue Milestone achieved"
                      content={{
                        reccurringRevenue: "$5.000 USD",
                        growth: "+8.2%",
                      }}
                    />
                  </AnimatedListItem>

                  <AnimatedListItem>
                    <DiscordMessage
                      avatarSrc="/brand-asset-profile-picture.png"
                      avatarAlt="PingPanda Avatar"
                      username="PingPanda"
                      timestamp="Today at 12:34 PM"
                      badgeText="Revenue"
                      badgeColor="#faa61a"
                      title="💰Payment received"
                      content={{
                        amount: "$49.00",
                        email: "martin@stark.com",
                        plan: '"Pro Plan"',
                      }}
                    />
                  </AnimatedListItem>
                </AnimatedList>
              </MockDiscordUI>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>

      {/*Bento Grid*/}
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h2 className="text-center text-base/7 font-semibold text-brand-600">
              Intuitive Monitoriing
            </h2>
            <Heading>Stay ahead with Real Time Insights</Heading>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
            {/* First BentoGrid Element */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]" />

              <div className="relative flex flex-col h-full overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px))] rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-light text-brand-950 max-lg:text-center">
                    Real-Time notifications
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    {" "}
                    Get notify about critical events the moment they happen, no
                    matter if you´re at home or on the go.
                  </p>
                </div>

                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <Image
                      className="size-full object-cover object-top"
                      src="/phone-screen.png"
                      alt="Phone screen displaying app interface"
                      fill
                    />
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]" />
            </div>

            {/* Second BentoGrid Element  */}
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px))] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-light text-brand-950 max-lg:text-center">
                    Track any Event
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    From new user signups to sucessful payments, PingPanda
                    botifies you for all critical events in your SaaS.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <Image
                    className="w-full max-lg:max-w-xs"
                    src="/bento-grid-event.png"
                    alt="Bento box illustrating event tracking"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
