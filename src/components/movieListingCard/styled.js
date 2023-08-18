import styled from 'styled-components'


export const MovieCard = styled.div`{
    width: calc(50% - 5px);
    margin-bottom: 25px;
    cursor: pointer;
    flex-shrink: 0;
}`

export const PosterBlock = styled.div`{
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1.5;
    background-size: cover;
    background-position: center;
    margin-bottom: 30px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 10px;
    transition: all ease 0.5s;
    .lazy-load-image-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
    
}`

export const PosterImage = styled.img`
{
    width: 100%;
    display: block;
    border-radius: 12px;
 
}`;

// .circleRating {
//     width: 40px;
//     height: 40px;
//     position: relative;
//     top: 30px;
//     background-color: white;
//     flex-shrink: 0;
//     @include md {
//         width: 50px;
//         height: 50px;
//     }
// }
    export const TextBlock = styled.div`{
        color: white;
        display: flex;
        flex-direction: column;
        .title {
            font-size: 16px;
            margin-bottom: 10px;
            line-height: 24px;
            @include ellipsis(1);
            @include md {
                font-size: 20px;
            }
        }
        .date {
            font-size: 14px;
            opacity: 0.5;
        }
    }
    &:hover {
        .posterBlock {
            opacity: 0.5;
        }
    }`;
  