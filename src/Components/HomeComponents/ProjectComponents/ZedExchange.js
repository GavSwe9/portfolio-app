import React from 'react'

export function ZedExchange() {
    return (
        <div className="w-5/6 md:w-7/12 lg:w-1/4 mb-5 text-gray-700 border-2 border-gray-200 rounded-md cursor-pointer hover:border-purple-500 hover:bg-purple-100" onClick={()=> window.open("https://zedexchange.io/", "_blank")}>
            <div className="h-24 py-2 text-7xl">
                {/* <img className="h-20 mx-auto" src={DraftPrinceLogo} alt="" /> */}
                &#128052;
            </div>
            <div className="text-2xl mx-5 mb-2 border-b-2 border-purple-200">
                Zed Exchange
            </div>
            <div className="w-5/6 mx-auto">
                <div className="mb-2">
                    A website that monitors listings and sales of NFT horses, with the ability to sort and filter a variety of characteristics.
                </div>
                <div className="mb-2">
                    AWS Lambdas trigged by Cloudwatch events every five minutes to update a MongoDB database.
                </div>
                <div className="mb-2">
                    Backend comprised of a MongoDB database and Node API deployed to AWS lambda via Serverless Framework.
                </div>
            </div>
        </div>
    )
}
