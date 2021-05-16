# Simple Navbar 

Create simple navbars with ease. If your navbar has got some simple nav-links then you
don't need to spend much time styling it up.

Let us do the hardwork all you need to do is give us the options.

## Getting Started 

`` npm install simplebar1  --save``

**The next thing is import your npm modules**

## For normal project use this 
`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simplebar1@latest/simpleBar.css">`


`<script type="module" src="https://cdn.jsdelivr.net/npm/simplebar1@latest/simpleBar.min.js"></script>;`

## NOTE: DON'T FORGET THE SCRIPT FILE HAS A TYPE="MODULE" AND WHEN YOU IMPORT IT IN YOUR JS FILE REMEMBER TO ADD THE TYPE="MODULE" TO THAT SCRIPT FILE TOO.

## To begin,
Add `<link rel="stylesheet" href="\node_modules\simpleBar.css">` to the head tag
Add ` <script src="\node_modules\simpleBar.js"></script>` to the end part of your body tag

First you create your nav element and give it an  `#navbar`
--
````
    import createNavbar from 'https://cdn.jsdelivr.net/npm/simplebar1@latest/simpleBar.min.js' or
    ## if you're using an npm package then you can just do 
    import createNavbar from '../node_modules/simplebar1/simplebar.js' 

    createNavbar({
            links: ["Home", "Service", "About", "contact", "Pricing", "FAQ", "support", "purchase"],
            logoType: "image",
            logo: "/toad.jpg",
            background: "teal",
            color: "white",
            logoColor: "brown",
            pathType: "#",
            style: "drop",
            humburgerColor: "white",
            fixed: true,
            logoFont:"Handwritting"
        })
````
# Options for style 

*drop*
--
*slide-from-right*
---
*slide-from-left.*
--



# Specify your logo type
Your logo can either be an image or text
so you pass in 

`logoType:"image"` or `logoType:"text"`

--

Then you can specify either your file location or the text for the logo .

# For path or Url
You can specify either `"#"` or `"/"` base on your preference, so ``pathType:"/"`` or `pathType:"#"`
            
# For FixedTop 
All you need to do is give it a `true` value and there you have fixed-top navbar.

You can practice the rest of the options with your own values since they are just colors.

# Add your own logo font-family
    you can just specify the font-family you want for your logo and also increase the fon-weight

    `logoFont:"Montserrat"`
    `logoBoldness:"700"`

**Looking to add more features**





