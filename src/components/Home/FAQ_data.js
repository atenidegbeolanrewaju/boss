import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import './FAQ.css'

function FAQ_question() {

    const [Data, setData] = useState(data)

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected ==+ i) {
            return setSelected(null)
        }

        setSelected(i)
    }

  return (
    <div className='wrapper'>
        <div className='accordion'>
            {Data.map((item, i) => (
                <div className='item'>
                    <div className='title' onClick={() => toggle(i)} >
                        <h3>{item.question}</h3>
                        {selected === i ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </div>
                    <div className={selected === i ? 'content show' : 'content' }>
                        <p>{item.answer}</p>    
                    </div> 
                </div>
            ))}

        </div>
    </div>
  );
}


const data  = [
    {
        question: 'THE BABY DON FAMILY?',
        answer: 'This is the first Dedicated Family NFT on the Entire Blockchain Metaverse. The Baby Don Family is a Unique, Fearless and Dangerous family that will stop at nothing to protect eachother. This NFT Collection are categorized from BABY - ADULT Stage with each stage giving more value to the project as we evolve and grow down the ROADMAP.'
    },
    {
        question: 'BABY DON?',
        answer: 'This is the First NFT releasing from THE BABY DON FAMILY COLLECTION. Our collection is going directly opposite the Ancient pattern of BREEDING, as we go AGEING. Check the Whitepaper for exculsive details.'
    },
    {
        question: 'What are your goals for the project?',
        answer: 'THE BABY DON FAMILY known for living a flamboyant Mafian lifestyle  Which inspires into a money printing Community with loads of utility to earn daily Passive incomes. This will be the most Epic Gambling fun lifestyle on solana Metaverse.'
    },
    {
        question: 'Wen mint?',
        answer: 'TBA'
    },
    {
        question: 'Supply?',
        answer: '600 BABY DON Collections'
    },
    {
        question: 'Mint Price',
        answer: 'TBA'
    },
    {
        question: 'Will there be sales in the Secondary Markets?',
        answer: 'YES, we be listing on Magiceden'
    },
    {
        question: 'What is the Whitelisted role and How do I get it?',
        answer: '@SOLDIERS role gives member 100% chance at mint which is limited to first 100 members. Whitelisted minting is wallet based, wallet will be submitted before mint date.'
    },
    {
        question: 'STAKING?',
        answer: 'Staking goes live immediately after Mint. 40% mint Proceed will be added to LP on DEX to activate Trading. NFT Hodlers can stake their NFT to start earning $DON Token which can be swapped to $Sol or used on our P2E game lauching on Mint Day.'
    },
    {
        question: 'Will there be secondary sale royalties?',
        answer: 'YES, we will be listed on Magiceden.'
    },
    {
        question: 'Is the team doxxed?',
        answer: 'Team will be doxxed ahead of Mint.'
    }
]

export default FAQ_question