const Title = ({title, subTitle}) => {

    /*component Title is waiting for 2 props
    The props are the data type that is repetead inside the sections, but changes values.
    About, Services, and Tours all have a Title and a Subtitle. The only difference between sections is the text value of those Titles and Subtitles.
    Therefore, these text values are the props component Title needs
    */

    return(
        <div className='section-title'>
            <h2>
                {title} <span>{subTitle}</span>
            </h2>
        </div>
    )
}

export default Title