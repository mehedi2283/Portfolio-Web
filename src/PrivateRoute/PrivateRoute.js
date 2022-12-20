import React, { useState } from "react";
const PrivateRoutes = ({ children }) => {
    const [loading] = useState(true);
    
    if (loading&&!children.length) {
        return (
            <div className="border my-72 border-primary shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-primary h-12 w-12"></div>
                    <div className="flex-1 space-y-4 py-1">
                        <div className="h-4 bg-primary rounded w-3/4"></div>
                        <div className="space-y-2">
                            <div className="h-4 bg-primary rounded"></div>
                            <div className="h-4 bg-primary rounded w-5/6"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return children;
};

export default PrivateRoutes;
