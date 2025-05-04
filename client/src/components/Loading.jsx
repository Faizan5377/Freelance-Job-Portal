import { HashLoader, RingLoader } from 'react-spinners'

export default function Loading() {
    return (
        <div className="loading-spinner">
            <RingLoader
                color="#008080"
                size={150}
                speedMultiplier={1}
            />
        </div>
    )
}
