import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const formatUserName = (userName) => `@${userName}`;

    return (
        <section className='App'>
            <TwitterFollowCard
            initialIsFollowing
            formatUserName={formatUserName}
            userName="lluisalfonso">
                Lluís Alfonso Sola    
            </TwitterFollowCard>

            <TwitterFollowCard
            initialIsFollowing
            formatUserName={formatUserName}
            userName="gerardalfonso">
                Gerard Alfonso Sola
            </TwitterFollowCard>

            <TwitterFollowCard
            formatUserName={formatUserName}
            userName="elonmusk">
                Elon Musk
            </TwitterFollowCard>
        </section>
    )
}