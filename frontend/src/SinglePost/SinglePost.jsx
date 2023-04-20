import React from 'react'

import './singlePost.css'

const SinglePost = () => {
    return (
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                <img
                    src='http://4kwallpapers.com/images/walls/thumbs_2t/5667.jpg'
                    alt=''
                    className='singlePostImg'
                />
                <h1 className='singlePostTitle'>
                    This is Nature
                    <div className='singlePostEdit'>
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash"></i>

                    </div>
                </h1>
                <div className='singlePostInfo'>

                    <span className='singlePostAuthor'>Author:<b>safak</b></span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>
                <p className='singlePostDesc'>The words nature and natural are used for all the things that are normally not made by humans. The word comes from the Latin natura meaning "birth". Nature includes many things like weather, organisms, landforms, celestial bodies. Scientists study the way the parts of nature work. Things that have been made by people are said to be man-made or called artifacts.

                    There are natural sciences that study different parts of nature, for example the science of ecology is about plants and animals as a whole, while biology studies every type of living thing.

                    From one point of view, humans are a prime example of nature, and are the most widely studied natural inhabitants of the planet earth. Humans interact with each other in their natural environment on a day-to-day basis. Every part of nature – everything from the air outside to the dirt on the ground – is interdependent. Medicine studies humans in health and sickness.

                    From another point of view, humans and nature can be said to be in conflict. People always use natural resources. They cut down trees, mine ores, grow crops and manufacture things from natural material. Fires, cars, and factories make a lot of smoke and harm many places. People who like to leave nature unharmed and those who feel they need to use more of nature often fight about what they should do. In the modern world, with many more people and many big cities, these problems are becoming more serious.

                    Nature, in the broadest sense, means the physical world as a whole. This is the meaning that physics, the study of nature (etymologically), takes.

                    A useful definition of natural is

                    "Happening or operating in accordance with the ordinary course of nature". Oxford Shorter English Dictionary says the word in this sense is first found in 1477.</p>
            </div>
        </div>
    )
}

export default SinglePost