function Comment ({ username, content, date }) {
    const formattedDate = new Date(date).toDateString();
    

    return (
        <div>
            <strong>{username}</strong>
            <small>{formattedDate}</small>
            <p>{content}</p>
        </div>
    );
};

export default Comment;