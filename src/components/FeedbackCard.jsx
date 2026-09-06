import { useState } from "react";

const FeedbackCard = ({ title }) => {
    const [upvotes, setUpvotes] = useState(0);
    const [downvotes, setDownvotes] = useState(0);

    const handleUpvote = () => {
        setUpvotes(upvotes + 1);
    };

    const handleDownvote = () => {
        setDownvotes(downvotes + 1);
    };

    return (
        <div className="flex w-full flex-col items-center rounded-lg bg-white p-6 text-center shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-black">{title}</h2>

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

            <div className="space-y-1 text-sm text-gray-600">
                <p>Upvotes: <strong className="text-gray-900">{upvotes}</strong></p>
                <p>Downvotes: <strong className="text-gray-900">{downvotes}</strong></p>
            </div>
        </div>
    );
};

export default FeedbackCard;