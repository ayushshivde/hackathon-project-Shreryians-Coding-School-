import React, { createContext, useState } from 'react'

export const shopcontext =createContext(null);

const Shopcontext = (props) => {

const [AllDeviceDetails, setAllDeviceDetails] = useState([{
    id: 'phone3',
    searchKeywords:["phone"],
    name: 'Phone 3',
    colors: [
      { colorName: 'BLACK',  colorHex: '#323136' ,  image: '/images/phone/Phone3Black.png' },
      { colorName: 'WHITE',  colorHex: '#DEDFDC' ,   image: '/images/phone/Phone3White.png' },
    ],
    variants: [
      { ram: 12, storage: 256, price: '₹79,999' },
      { ram: 16, storage: 512, price: '₹89,999' },
    ],
    highlights: [
      'Qualcomm 8s Gen 4 Processor',
      '50MP + 50MP (periscope telephoto) + 50MP | 50MP Front Camera',
      '4k @30/60fps , 120Hz Refresh Rate',
      '5500 mAh Battery',
    ],
    defaultImage: '/images/phone/Phone3White.png',
  },

 {
    id: 'phone3apro',
     searchKeywords:["phone"],
    name: 'Phone 3a Pro',
    colors: [
      { colorName: 'BLACK', colorHex: '#222D30' ,  image: '/images/phone/Phone3aProBlack.png' },
      { colorName: 'GREY', colorHex: '#C0C1C5' ,  image: '/images/phone/Phone3aProGrey.png' },
    ],
    variants: [
      { ram: 8, storage: 256, price: '₹31,999' },
      { ram: 12, storage: 256, price: '₹33,999' },
    ],
    highlights: [
      'Qualcomm SM7635 Snapdragon 7s Gen 3',
      '50MP + 50MP (3X Periscope)+ 8MP (Ultra-Wide) | 50MP Front Camera',
      '6.7 inch 120Hz Refresh rate',
      '5000 mAh Battery',
    ],
    defaultImage: '/images/phone/Phone3aProGrey.png',
  },
  {
    id: 'phone3a',
     searchKeywords:["phone"],
    name: 'Phone 3a',
    colors: [
      { colorName: 'BLACK', colorHex: '#2B3438' ,  image: '/images/phone/Phone3aBlack.png' },
      { colorName: 'WHITE', colorHex: '#E8E8E6' ,  image: '/images/phone/Phone3aWhite.png' },
      { colorName: 'BLUE', colorHex: '#146A8B' ,  image: '/images/phone/Phone3aBlue.png' },
    ],
    variants: [
      { ram: 8, storage: 128, price: '₹24,999' },
      { ram: 8, storage: 256, price: '₹26,999' },
    ],
    highlights: [
      'Qualcomm SM7635 Snapdragon 7s Gen 3',
      '50MP + 50MP (2X Tele Photo) + 8MP (Ultra-Wide) | 32MP Front Camera',
      '6.7 inch 120Hz Refresh rate',
      '5000 mAh Battery',
    ],
    defaultImage: '/images/phone/Phone3aBlue.png',
  },


    {
    id: 'phone2aplus',
     searchKeywords:["phone"],
    name: 'Phone 2a Plus',
    colors: [
      { colorName: 'BLACK', colorHex: '#202426' , image: '/images/phone/Phone2aPlusBlack.png' },
      { colorName: 'GREY', colorHex: '#A9ABAD' , image: '/images/phone/Phone2aPlusGrey.png' },
    ],
    variants: [
      { ram: 8, storage: 256, price: '₹27,999' },
      { ram: 12, storage: 256, price: '₹29,999' },
    ],
    highlights: [
      
      '50MP + 50MP | 50MP Front Camera',
      '17.02 cm (6.7 inch) Full HD+ Display',
      'Dimensity 7350 Pro 5G Processor',
      '5000 mAh Battery',
    ],
    defaultImage: '/images/phone/Phone2aPlusBlack.png',
  },

  {
    id: 'phone2a',
     searchKeywords:["phone"],
    name: 'Phone 2a',
    colors: [
      { colorName: 'BLACK', colorHex: '#222629' , image: '/images/phone/Phone2aBlack.png' },
      { colorName: 'MILK', colorHex: '#ECECEC' , image: '/images/phone/Phone2aMilk.png' },
    ],
    variants: [
      { ram: 8, storage: 128, price: '₹23,999' },
      { ram: 12, storage: 256, price: '₹25,999' },
    ],
    highlights: [
      'Dimensity 7200 Pro Processor',
      '50MP (OIS) + 50MP | 32MP Front Camera',
      '17.02 cm (6.7 inch) Full HD+ Display',
      '5000 mAh Battery',
    ],
    defaultImage: '/images/phone/Phone2aMilk.png',
  },




  {
    id: 'Cmfphone2',
     searchKeywords:["CMF"],
    name: 'CMF Phone 2 Pro',
    colors: [
      { colorName: 'BLACK', colorHex: '#404246' , image: '/images/phone/CMFPhone2ProBlack.png' },
      { colorName: 'GREEN', colorHex: '#D2DED8' , image: '/images/phone/CMFPhone2ProGreen.png' },
      { colorName: 'ORANGE', colorHex: '#E73C22' ,image: '/images/phone/CMFPhone2ProOrange.png' },
      { colorName: 'WHITE', colorHex: '#E7E9EB' , image: '/images/phone/CMFPhone2ProWhite.png' },
    ],
    variants: [
      { ram: 8, storage: 128, price: '₹18,999' },
      { ram: 8, storage: 256, price: '₹20,999' },
    ],
    highlights: [
      '17.2 cm (6.77 inch) Display',
      '50MP + 50MP + 8MP | 16MP Front Camera',
      'Dimensity 7300 Pro 5G Processor',
      '5000 mAh battery',
    ],
    defaultImage: '/images/phone/CMFPhone2ProWhite.png',
  },






  {
    id: 'Cmfphone1',
     searchKeywords:["CMF"],

    name: 'CMF Phone 1',
    colors: [
      { colorName: 'ORANGE',colorHex: '#F7401C' ,  image: '/images/phone/CMFPhone1Orange.png' },
      { colorName: 'BLACK', colorHex: '#28272C'  , image: '/images/phone/CMFPhone1Black.png' },
      { colorName: 'GREEN',colorHex: '#B6CCC5'  , image: '/images/phone/CMFPhone1Green.png' },
    ],
    variants: [
      { ram: 6, storage: 128, price: '₹15,999' },
      { ram: 8, storage: 128, price: '₹17,999' },
    ],
    highlights: [
      '50 MP Sony rear camera',
      '16.94 cm (6.67 inch) Full HD+ Display',
      'Dimensity 7300 5G Processor',
      '5000 mAh battery',
    ],
    defaultImage: '/images/phone/CMFPhone1Orange.png',
  },

 


{
    id: 'earwhite',
     searchKeywords:["audio"],

    name: 'Ear',
    colors: [
      { colorName: 'WHITE', colorHex: '#F8FAFB' ,  image: '/images/audioDevices/EarWhite.png'  },
      { colorName: 'BLACK',colorHex: '#121D21' ,  image: '/images/audioDevices/EarBlack.png'  },
    ],
  variants: [
      { price:"₹11,999" },
      
    ],
    highlights: [
      '24-bit Hi-Res Audio',
      'Premium 11 mm ceramic driver for elite clarity',
      '45 dB active noise cancellation',
      '40.5 h battery',
      
      
    ],
    defaultImage: '/images/audioDevices/EarBlack.png'
  },






  {
    id: 'eara',
     searchKeywords:["audio"],

    name: 'Ear (a)',
    colors: [
   
      { colorName: 'WHITE',colorHex: '#E2E3E1' , image: '/images/audioDevices/EaraWhite.png'  },
      { colorName: 'BLACK', colorHex: '#2D3539' , image: '/images/audioDevices/EaraBlack.png'  },
      { colorName: 'YELLOW',colorHex: '#FEE430' , image: '/images/audioDevices/EaraYellow.png'  },
    ],

       variants: [
      { price:"₹7999" },
      
    ],
  
    highlights: [
      'Hi-Res Audio with LDAC',
      '45 dB active noise cancellation',
      'Powerful dynamic 11 mm driver,',
      '42.5 h battery',
     

    ],
    defaultImage: '/images/audioDevices/EaraYellow.png'
  },

{
    id: 'headphone1white',
     searchKeywords:["audio"],

    name: 'Headphone 1',
    colors: [
      { colorName: 'BLACK', colorHex: '#1E1E1E' , image: '/images/audioDevices/Headphone1Black.png'  },
      { colorName: 'WHITE',colorHex: '#D2D4D6' , image: '/images/audioDevices/Headphone1White.png'  },
    ],

     variants: [
      { price:"₹21,999" },
      
    ],
  
    highlights: [
      'Up to 80 hours of playback',
      'Support for Hi-Res Audio, LDAC',
      'Real-time adaptive ANC',
      'Bluetooth and Wired'

    ],
    defaultImage: '/images/audioDevices/Headphone1White.png',
  },
  {
    id: 'earopen',
     searchKeywords:["audio"],

    name: 'Ear Open',
    colors: [
   
      { colorName: 'WHITE',colorHex:'#D2D4D6' , image: '/images/audioDevices/EarOpenWhite.png'   },
    ],
    variants: [
      { price:"₹7999" },
      
    ],
    highlights: [
      '30 hr of playback',
      '14.2mm dynamic driver',
      'AI-enhanced technologyn',
      'Hi-Res Audio with LDAC',

    ],
    defaultImage: '/images/audioDevices/EarOpenWhite.png'
  },

  {
    id: 'cmfbudspro2',
     searchKeywords:["audio","CMF"],

    name: 'CMF Buds Pro 2',
    colors: [
   
      { colorName: 'WHITE',colorHex: '#DEE0E2' , image: '/images/audioDevices/CMFBudsPro2White.png'  },
      { colorName: 'BLACK',colorHex: '#4A4C50' , image: '/images/audioDevices/CMFBudsPro2Black.png'  },
      { colorName: 'ORANGE',colorHex: '#FF6849' , image: '/images/audioDevices/CMFBudsPro2Orange.png'   },
      { colorName: 'BLUE',colorHex: '#485BA0' , image: '/images/audioDevices/CMFBudsPro2Blue.png'  },
    ],

         variants: [
      { price:"₹4,299" },
      
    ],
  
    highlights: [
      '50 DB Hybrid ANC',
      'Wireless range: 10 meters',
      '11 MM + 6 MM Dual drivers',
      '6 HD mics',
     

    ],
    defaultImage: '/images/audioDevices/CMFBudsPro2Orange.png'
  },

 {
    id: 'cmfbuds2plus',
     searchKeywords:["audio","CMF"],

    name: 'CMF Buds 2 Plus',
    colors: [
   
      { colorName: 'WHITE', colorHex: '#D3D2D5' , image: '/images/audioDevices/CMFBuds2PlusWhite.png'  },
      { colorName: 'BLUE', colorHex: '#3B486C' , image: '/images/audioDevices/CMFBuds2PlusBlue.png'   },
    ],
  
         variants: [
      { price:"₹3,299" },
      
    ],
  


    highlights: [
      '12 mm LCP drivers',
      'Wireless range: 10 meters',
      'Hi-Res Audio with LDAC',
      '50 dB hybrid ANC',
      
     

    ],
    defaultImage:  '/images/audioDevices/CMFBuds2PlusWhite.png'
  },




 {
    id: 'cmfbuds2a',
     searchKeywords:["audio"],

    name: 'CMF Buds 2a',
    colors: [
   
      { colorName: 'WHITE', colorHex: '#DEE0E2' , image: '/images/audioDevices/CMFBuds2aWhite.png'  },
      { colorName: 'ORANGE',colorHex: '#ED6A42' , image: '/images/audioDevices/CMFBuds2aOrange.png'  },
      { colorName: 'BLACK',colorHex: '#414043' , image: '/images/audioDevices/CMFBuds2aBlack.png'  },
    ],
  

         variants: [
      { price:"₹2.199" },
      
    ],


    highlights: [
      '12.4mm Bio-fibre Driver',
      '42 dB Active Noise Cancellation',
      'Up to 8 hours of playback',
     '360 Cinematic Sound',

    ],
    defaultImage:  '/images/audioDevices/CMFBuds2aWhite.png'
  },
])


  return (
<shopcontext.Provider value={{AllDeviceDetails}} >
    {props.children}
</shopcontext.Provider>
  )
}

export default Shopcontext