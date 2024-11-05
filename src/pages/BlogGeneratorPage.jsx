import React, { useState } from 'react';
import { Logo } from '../assets';
import { SignatureOutlined, HistoryOutlined, SettingOutlined, CopyOutlined, DownloadOutlined } from '@ant-design/icons';
import { GiSparkles } from 'react-icons/gi';

const menuItems = [
    {
        icon: <SignatureOutlined />,
        title: "AI Writer"
    },
    {
        icon: <HistoryOutlined />,
        title: "History"
    },
    {
        icon: <SettingOutlined />,
        title: "Setting"
    }
];

const BlogGeneratorPage = () => {
    const [blogTopic, setBlogTopic] = useState('');
    const [generatedBlog, setGeneratedBlog] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerateBlog = async () => {
        setLoading(true);
        setError('');
        setGeneratedBlog('');

        try {
            const response = await fetch('https://4gq02haaug.execute-api.us-east-1.amazonaws.com/dev/blog-generation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ blog_topic: blogTopic })
            });

            if (!response.ok) {
                throw new Error('Error generating blog');
            }

            const result = await response.json();
            setGeneratedBlog(result.generatedBlog); // Use the blog content from the backend response
        } catch (error) {
            setError('Failed to generate blog content. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='bg-gradient-to-r from-[#c5aff5] to-white h-[100vh]'>
            {/* Sider */}
            <div className='bg-white h-[100vh] fixed overflow-auto top-0 bottom-0 w-[25%]  rounded-md m-2'>
                <div className='flex space-x-2 p-4'>
                    <img src={Logo} alt='Logo' className='w-[24px] h-[24px]' />
                    <p className='font-semibold'>Adeola's Workspace</p>
                </div>

                <div className='space-y-4 mt-2'>
                    {menuItems.map((menu) => (
                        <div key={menu.title} className='flex space-x-2 px-4'>
                            {menu.icon}
                            <p>{menu.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className='ml-[400px] h-full flex flex-col items-center pt-12 rounded-lg space-y-4'>
                <h2 className='text-3xl font-semibold text-center'>What will you write today?</h2>
                <p className='text-center text-gray-600'>
                    Create engaging blog posts that resonate with your audience in just a few clicks.
                </p>

                <div className='bg-white w-[75%] rounded-2xl flex flex-col items-end'>
                    <textarea
                        placeholder='Specify a writing task'
                        value={blogTopic}
                        onChange={(e) => setBlogTopic(e.target.value)}
                        className='w-full h-16 p-3 rounded-2xl focus:outline-none focus:border-green-500 resize-none'
                    />

                    <button
                        onClick={handleGenerateBlog}
                        disabled={loading || !blogTopic}
                        className='m-4 px-6 py-2 w-[120px] h-[40px] bg-blue-500 text-white font-semibold rounded-md flex items-center justify-center hover:bg-blue-600 transition'
                    >
                        {loading ? 'Generating...' : 'Create'} <GiSparkles className='ml-2' />
                    </button>
                </div>

                {error && <p className='text-red-500'>{error}</p>}

                <div className='w-[75%] h-96 rounded-lg bg-white p-6 shadow-lg'>
                    {generatedBlog ? (
                        <div className="overflow-y-auto h-[90%] p-4 text-gray-700 custom-scrollbar">
                            {generatedBlog}
                        </div>
                    ) : (
                        <p className='text-gray-500'>Your generated blog content will appear here...</p>
                    )}
                    <div className='mt-3 flex justify-end space-x-4'>
                        <button className="text-gray-500 hover:text-blue-600 transition-colors">
                            <CopyOutlined className="text-lg" />
                        </button>
                        <button className="text-gray-500 hover:text-blue-600 transition-colors">
                            <DownloadOutlined className="text-lg" />
                        </button>
                    </div>

                    <style>
                        {`
                            .custom-scrollbar::-webkit-scrollbar {
                                width: 8px;
                            }
                            .custom-scrollbar::-webkit-scrollbar-thumb {
                                background-color: gray;
                                border-radius: 4px;
                            }
                            .custom-scrollbar::-webkit-scrollbar-track {
                                background: #f0f0f0;
                            }
                        `}
                    </style>
                </div>
            </div>
        </div>
    );
};

export default BlogGeneratorPage;
