
import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const ChatBot = () => {
    return (
        <div>
            <FacebookProvider appId="319703634039218" chatSupport>
                <CustomChat pageId="157368884121163" minimized={false} />
            </FacebookProvider>
        </div>
    );
};

export default ChatBot;