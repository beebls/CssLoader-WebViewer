# DEPRECATED
## This repository is no longer used, CSSLoader & AudioLoader have moved to [deckthemes.com](https://deckthemes.com)

# [CssLoader Theme Browser](https://cssloader.beebl.es)

<div align="center" markdown="1">
    <img src="https://i.imgur.com/TqKdVyB.png" width="800"></img>
</div>

## App Description

CssLoader is a plugin for the Steam Deck Homebrew (Decky) plugin loader, it enables users to design or install custom CSS themes that they can apply to the Steam Deck UI. It has a react-based theme browser that can be accessed from within the plugin, that pulls data from a database and has 1-click installs of themes.

This project just ports my front-end code for the Steam Deck application and turns it into a webpage that is viewable from any device.

## Website Technical Details

Made in React, statically generated with NextJS, and hosted on Netlify.
The data is grabbed from [a mirror repo](https://github.com/beebls/CssLoader-ThemeDb-Mirror) to ensure CORS compatibility. 
