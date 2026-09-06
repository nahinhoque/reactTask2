import { useState } from "react";

const Testing = () => {
    const [upvotes, setUpvotes] = useState(0);
    const [downvotes, setDownvotes] = useState(0);

    const handleUpvote = () => {
        setUpvotes(upvotes + 1);
    };

    const handleDownvote = () => {
        setDownvotes(downvotes + 1);
    };

    return (
        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 w-full text-center flex flex-col items-center">
            <h2 className="text-xl font-semibold text-black mb-4">Testing</h2>

            <div className="mb-4 flex justify-center gap-3">
                <button
                    onClick={handleUpvote}
                    className="cursor-pointer rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white active:scale-95"
                >
                    👍 Upvote
                </button>
                <button
                    onClick={handleDownvote}
                    className="cursor-pointer rounded-md bg-rose-700 px-4 py-2 text-sm font-medium text-white active:scale-95"
                >
                    👎 Downvote
                </button>
            </div>

            <div className="text-gray-600 text-sm space-y-1">
                <p>Upvotes: <strong className="text-gray-900">{upvotes}</strong></p>
                <p>Downvotes: <strong className="text-gray-900">{downvotes}</strong></p>
            </div>
        </div>
    );
};

export default Testing;