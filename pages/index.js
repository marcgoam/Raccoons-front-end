import Header from "../components/Header"
import MintNFT from "../components/MintNFT"
import { useMoralis } from "react-moralis"
// import background from "../public/preview.png"

const supportedChains = ["31337", "11155111", "5"]

export default function Home() {
    const { isWeb3Enabled, chainId } = useMoralis()

    return (
        <div>
            <Header />
            <div className="flex flex-row justify-between py-24">
                <img
                    src="/preview.gif"
                    alt="My Image"
                    className="rounded-full h-40 ml-40 mt-20"
                />
                <MintNFT />
                <img
                    src="/preview.gif"
                    alt="My Image"
                    className="rounded-full h-40 mr-40 mt-20"
                />
            </div>
        </div>
    )
}
