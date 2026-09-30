import { useState } from "react";
import { profile } from "../../data/portfolio";

// Photo load na ho (ya abhi add na ki ho) to initials dikhata hai.
export default function Avatar({ textSize = "text-4xl" }) {
    const [failed, setFailed] = useState(false);

    if (failed) {
        return (
            <div className={`w-full h-full flex items-center justify-center bg-gray-900 text-white font-extrabold ${textSize}`}>
                {profile.initials}
            </div>
        );
    }

    return (
        <img
            src={profile.photo}
            alt={profile.name}
            onError={() => setFailed(true)}
            className="w-full h-full object-cover grayscale brightness-110 contrast-105"
        />
    );
}
