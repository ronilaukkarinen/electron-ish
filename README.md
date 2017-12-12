# Electron wrapper for ish.

You are looking my first Electron app, which is a wrapper for <a href="http://bradfrostweb.com/demo/ish/">Brad Frost's ish. responsive testing tool</a>. Read more below.

![Screenshot (Screenshot)](https://rolle.wtf/ish.png "Screenshot")

## Features

- Minimal Electron wrapper, works locally without Internet
- Includes scripts inline
- Inspect + Developer Tools baked in

To build macOS .app, use this:

```bash
sudo rm -rf ish-darwin-* && electron-packager . "ish" --platform=darwin --overwrite
```

## What
<strong><a href="http://bradfrostweb.com/demo/ish/">View Demo</a></strong>. ish. is yet another viewport resizer. What's with the name, you ask? Small-ish. Medium-ish. Large-ish. That's the idea. Many have long been preaching to <a href="http://www.netmagazine.com/tutorials/determining-breakpoints-responsive-design">let content, not device widths determine breakpoints</a> in responsive designs, so rather than determining several fixed breakpoints, ish. roughs out general ranges in order to better serve the <a href="http://static.lukew.com/unified_device_design.png">entire resolution spectrum</a>. 

## Why</h2>
Do we really need another viewport resizer? After all, there's no fewer than 19 <a href="http://bradfrost.github.com/this-is-responsive/resources.html#viewport-testing">viewport testing tools</a> out there already. 

The real reasons for this tool is to educate and to facilitate a mental shift. Many clients, designers and developers get hung up on specific device widths, which is why this tool doesn't include any such language, device chrome or anything like that. Ish. helps keep everyone focused on making a design that looks and functions great at any resolution.

## How
<ol>
<li>Find the URL button in the top left and enter any url.</li>
<li>Once the site loads find the <strong>Size</strong> button and expand the sizing options</li>
<li>Choose Small-ish, Medium-ish, Large-ish, Xtra-Large-ish, or any random size (many thanks to <a href="https://twitter.com/jordanmoore">Jordan Moore</a> and his <a href="http://www.jordanm.co.uk/lab/responsiveroulette"> Responsive Roulette</a> for the idea). Or enter any specific value.</li>
<li>Watch as the site resizes and look for any visual or functional oddities along the way.</li>
<li>Use Alt+U to toggle in and out of Focus Mode</li>
<li>Focus Mode will remove the ish. UI and focus on the content (useful if demonstrating a site to clients)</li>
<li>Once in Focus Mode, use keys 1 - 5 to resize the viewport</li>
</ol>

## Who
Who is this for? Clients. Visual designers. Developers. Really anyone involved in the project that needs educated about creating truly device-agnostic websites.

## Where
You can find the project on <a href="https://github.com/bradfrost/ish.">Github.</a> You should set up ish. on your own server or dev environment for best results.

## To build an app

```bash
electron-packager <sourcedir> <appname> --platform=<platform> --arch=<arch> [optional flags...]
```

See more in [electron-packager](https://github.com/electron-userland/electron-packager#supported-platforms).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/electron/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Resources for Learning Electron

- [electron.atom.io/docs](http://electron.atom.io/docs) - all of Electron's documentation
- [electron.atom.io/community/#boilerplates](http://electron.atom.io/community/#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
