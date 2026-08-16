//% color="#9C27B0" icon="\uf001" weight=100 block="MP3"

namespace mp3 {
    //% block="MP3を再生 %name"
    //% name.shadow="text"
    export function play(name: string): void {
        console.log("MP3: " + name)
    }

    //% block="MP3を停止"
    export function stop(): void {
        console.log("MP3 stop")
    }
}
