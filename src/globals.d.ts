declare module '*.scss' {
    const content: { [className: string]: string }
    export = content
}

declare module '*.png' {
    const content: { [className: string]: string }
    export = content
}

declare module '*.jpg' {
    const content: { [className: string]: string }
    export = content
}

interface Process {
    env: any
    browser: boolean
}

declare let process: Process

declare module 'google-map-react'
