import { Inbox, PlusCircle, UserCircle } from "lucide-react"
import Image from "next/image"
import { PropsWithChildren } from "react"
import { Icons } from "./icon"

export const MockDiscordUI = ({ children }: PropsWithChildren) => {
    return (
            <div className="flex min-h-[800px] w-full max-w-[1200px] bg-discord-background text-white rounded-lg overflow-hidden shadow-xl">
                {/* server list */}
                <div className="hidden sm:flex w-[72px] bg-[#202225] py-3 flex-col items-center">
                    <div className="size-12 bg-discord-brand-color rounded-2xl flex items-center justify-center mb-2 hover:rounded-xl transition-all duration-200">
                        <Icons.discord className="size-3/5 text-white" />
                    </div>

                    <div className="w-8 h-[2px] bg-discord-background rounded-full my-2" />

                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="size-12 bg-discord-background rounded-3xl flex items-center justify-center mb-3 hover:rounded-xl transition-all duration-200 hover:bg-discord-brand-color cursor-not-allowed"
                        >
                            <span className="text-lg font-semibold text-gray-400">
                            {String.fromCharCode(65 + i)}
                            </span>
                        </div>
                    ))}

                    <div className="group mt-auto size-12 bg-discord-background rounded-3xl flex items-center justify-center mb-3 hover:rounded-xl transition-all duration-200 hover:bg-[#3ba55c] cursor-not-allowed">
                        <PlusCircle className="text-[#3ba55c] group-hover:text-white" />
                    </div>
                </div>

                {/* Dm List */}
                <div className="hidden md:flex w-69 bg-[#2f3136] flex-col">
                    <div className="px-4 h-16 border-b border-[#202225] flex items-center shadow-sm">
                        <div className="w-full bg-[#202225] tex-sm rounded px-2 h-8 flex items-center justify-center text-gray-500 cursor-not-allowed">
                            find or start a conversation
                        </div>                 
                    </div>

                    {/* Friends and Inbox Nitro */}

                    <div className="flex-1 overflow-y-auto pt-4">
                        <div className="px-2 mb-4">
                            <div className="flex items-center text-sm px-2 py-1.5 rounded hover:bg-[#393c43] text-[#dcddde] cursor-not-allowed">
                                <UserCircle className="mr-4 size-8 text-[#b9bbbe]" />
                                <span className="font-medium text-sm">Friends</span>

                            </div>
                            <div className="flex items-center text-sm px-2 py-1.5 rounded hover:bg-[#393c43] text-[#dcddde] cursor-not-allowed">
                                <Inbox className="mr-4 size-8 text-[#b9bbbe]" />
                                <span className="font-medium text-sm">Nitro</span>
                            </div>
                        </div>

                        {/* Direct Messages */}

                        <div className="px-2 mb-4">
                            <h3 className="text-xs text-[#8e9297] font-semibold px-2 mb-2 uppercase">Direct Messages</h3>
                        </div>

                        <div className="flex items-center px-2 py-1.5 rounded bg-[#393c43] text-white cursor-pointer ">
                            <Image 
                            src="/brand-asset-profile-picture.png"
                            alt="Ping Panda Avatar"
                            width={32}
                            height={32}
                            className="object-over rounded-full mr-2"
                            />
                            <span className="font-medium">PingPanda</span>
                        </div>

                        <div className="my-1 space-y-px">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className=" flex items-center px-2 py-1.5 rounded text-gray-600 cursor-not-allowed">
                                    <div className="size-8 rounded-full bg-discord-background mr-3"/>
                                    <span className="font-medium">User {i + 1}</span>
                                </div>  
                            ))}
                        </div>
                    </div>

                    
                    <div className="p-2 bg-[#292b2f] flex items-center">
                    <div className="size-8 rounded-full bg-blue-700 mr-2"/>
                </div>
                </div>
                
            </div>
            )
}  