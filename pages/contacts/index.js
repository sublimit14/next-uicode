import React from 'react';
import Head from "next/head";
import MainLayout from "../../components/MainLayout";
import HeadContent from "../../components/HeadContent/HeadContent";

const Contacts = (props) => {
    return (
        <MainLayout>
            <Head>
                <HeadContent
                    title={'Contact information | uicode.ru 🤔'}
                    description={'uicode description'}
                    keywords={'uicode keywords'}
                />
            </Head>

            <section className='container'>
                <h1>Contacts</h1>
                <p>
                    This example adds a property to your page,
                    allowing you to return a React component for the layout. This allows you
                    to define the layout on a per-page basis. Since we're returning a
                    function, we can have complex nested layouts if desired.
                </p>
                <p>
                    When navigating between pages, we want to persist page state (input
                    values, scroll position, etc.) for a Single-Page Application (SPA)
                    experience.
                </p>
                <p>
                    This layout pattern will allow for state persistence because the React
                    component tree is persisted between page transitions. To preserve state,
                    we need to prevent the React component tree from being discarded between
                    page transitions.
                </p>
                <h3>Try It Out</h3>
                <p>
                    To visualize this, try tying in the search input in the{' '}
                    <code>Sidebar</code> and then changing routes. You'll notice the input
                    state is persisted.
                </p>
            </section>

        </MainLayout>
    );
};

export default Contacts;