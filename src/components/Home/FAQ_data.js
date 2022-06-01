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
                <div key={item.id} className='item'>
                    <div className='title' onClick={() => toggle(i)} >
                        <h4 className='title-h4_'>{item.question}</h4>
                        {selected === i ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </div>
                    <div className={selected === i ? 'content show' : 'content' }>
                        <p className='title-p'>{item.answer}</p>    
                    </div> 
                </div>
            ))}

        </div>
    </div>
  );
}


const data  = [
    {
        id: 1,
        question: 'THE BABY DON FAMILY?',
        answer: 'This is the first Dedicated Family NFT on the Entire Blockchain Metaverse. The BABY DON FAMILY is a Unique, Fearless and Dangerous family that will stop at nothing to protect eachother. This NFT Collection are categorized from BABY - ADULT Stage with each stage giving more value to the project as we evolve and grow down the ROADMAP.'
    },
    {
        id: 2,
        question: 'BABY DON?',
        answer: 'This is the First NFT releasing from THE BABY DON FAMILY COLLECTION. Our collection is going directly opposite the Ancient pattern of BREEDING, as we go AGEING. Check the Whitepaper for exclusive details.'
    },
    {
        id: 3,
        question: 'What are your goals for the project?',
        answer: 'THE BABY DON FAMILY known for their flamboyant and Mafian lifestyle which inspires into a money printing Community with loads of utility to earn daily Passive incomes. This will be the most Epic Gambling Fun lifestyle on Solana Metaverse.'
    },
    {
        id: 4,
        question: 'When mint?',
        answer: 'TBA'
    },
    {
        id: 5,
        question: 'Supply?',
        answer: '600 BABY DON Collections'
    },
    {
        id: 6,
        question: 'Mint Price',
        answer: 'TBA'
    },
    {
        id: 7,
        question: 'Will there be sales in the Secondary Markets?',
        answer: 'YES, we will be listing on Magiceden'
    },
    {
        id: 8,
        question: 'What is the Whitelisted role and How do I get it?',
        answer: '@SOLDIERS role gives member 100% chance at mint which is limited to first 100 members. Whitelisted minting is wallet based, wallet will be submitted before mint date.'
    },
    {
        id: 9,
        question: 'STAKING?',
        answer: 'Staking goes live immediately after Mint. 40% mint Proceed will be added to LP on DEX to activate Trading. NFT Hodlers can stake their NFT to start earning $DON Token which can be swapped to $Sol or used on our P2E game lauching on Mint Day.'
    },
    {
        id: 10,
        question: 'Is the team doxxed?',
        answer: 'Team will be doxxed ahead of Mint.'
    },
    {
        id: 11,
        question: 'Is our Project open for Collaboration and Partnership for WL?',
        answer: 'YES'
    }
]

export default FAQ_question