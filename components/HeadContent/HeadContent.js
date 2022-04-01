const HeadContent = ({title, description, keywords}) => {
    return (
        <div>
            <link rel="icon" href="/favicon.ico" />
            {/*<meta charSet="utf-8"/>*/}
            {/*<meta name="viewport" content="initial-scale=1.0, width=device-width"/>*/}
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
        </div>
    );
};

export default HeadContent;
