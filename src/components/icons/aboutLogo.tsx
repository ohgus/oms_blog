import Link from "next/link";

export default function AboutLogo() {
    return(
        <Link href="/about">
            <svg 
                width="65" 
                height="30" 
                viewBox="0 0 259 74" 
                fill="currentColor" 
                className="text-black dark:text-white"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M49.5 49.4C49.7 51.4 50.1667 53.4 50.9 55.4C51.7 57.4 52.9 60.1667 54.5 63.7C55.5667 65.9 56.5333 68.1 57.4 70.3C57.4 71.1 57.1 71.6333 56.5 71.9C55.9667 72.1667 55.1667 72.3 54.1 72.3C53.5 72.3 52.9333 72.2 52.4 72C51.8667 71.8 51.5333 71.6667 51.4 71.6C50.4667 71.1333 49.6333 70.9 48.9 70.9C48.5667 70.9 48.0667 71 47.4 71.2C46.8 71.4 46.3667 71.5 46.1 71.5C45.7667 71.5 45.4 71.1 45 70.3C44.6667 69.4333 44.2333 68.1667 43.7 66.5C43.5 66.0333 43.3 65.5667 43.1 65.1C42.9667 64.5667 42.8 64.0333 42.6 63.5C42.4667 63.2333 42.0333 62.1333 41.3 60.2C40.5667 58.2667 39.6333 56.6 38.5 55.2C37.4333 53.8 36.3333 53.1 35.2 53.1C33.8667 53.1 32.6 53.2 31.4 53.4C30.9333 53.4667 30.3667 53.5333 29.7 53.6C29.1 53.6667 28.3667 53.7 27.5 53.7C25.6333 53.7 23.7 53.6 21.7 53.4C17.7 53.2 15.4667 53.1 15 53.1C14.3333 55.6333 13.7667 57.5667 13.3 58.9C12.8333 60.1667 11.9333 62.3333 10.6 65.4C10.3333 66.0667 10.1333 66.9333 10 68C9.8 69.4 9.5 70.4667 9.1 71.2C8.76667 71.9333 8.16667 72.3 7.3 72.3C6.1 72.3 5.06667 72.2 4.2 72C3.33333 71.8667 2.16667 71.5333 0.7 71C0.7 69.8667 0.933333 68.6 1.4 67.2C1.86667 65.7333 2.56667 63.8333 3.5 61.5L4.4 59.3C4.93333 57.7 5.46667 55.9 6 53.9C6.6 51.9 7 50.5333 7.2 49.8C8.2 45.6 9.13333 42.3667 10 40.1C10.4667 38.8333 11.1667 37.1333 12.1 35C12.3 34.4667 12.7333 33.4333 13.4 31.9C14.0667 30.3 14.6 28.7 15 27.1L15.5 26.6C15.6333 26.1333 15.8 25.2667 16 24C16.2 22.6667 16.5333 21.5667 17 20.7C17.4667 19.8333 18.0667 19.4 18.8 19.4C18.8 18.3333 19.4 15.8 20.6 11.8C21.8667 7.8 22.8333 5.53333 23.5 5C26.9667 5 29.2667 5.06666 30.4 5.19999C31.6 5.33333 32.5333 5.8 33.2 6.59999C33.8667 7.4 34.5667 8.93333 35.3 11.2L36.5 13.6L36.4 14.5C36.8 14.5 37.1 14.7667 37.3 15.3C37.5667 15.8333 37.8333 16.6333 38.1 17.7C38.3667 18.8333 38.6333 19.8 38.9 20.6C39.2333 21.3333 39.6667 21.9 40.2 22.3C40.0667 22.3 39.9333 22.3667 39.8 22.5C39.6667 22.6333 39.5667 22.7333 39.5 22.8C39.5 23.2667 39.7 23.9667 40.1 24.9C40.5667 25.7 40.8 26.4333 40.8 27.1H42.1C41.9667 27.2333 41.8333 27.4333 41.7 27.7C41.5667 27.9667 41.5 28.2 41.5 28.4C41.5 28.7333 41.9 29.4333 42.7 30.5C43.5 31.7 43.9 32.4333 43.9 32.7L44.3 34.9C44.7 37.6333 45.2 39.6 45.8 40.8C46.3333 41.8 46.9 42.5333 47.5 43C47.9667 43.4 48.3333 43.9667 48.6 44.7C48.9333 45.4333 49.2333 47 49.5 49.4ZM21.7 22.3C19.9667 22.3 19.1 23.0333 19.1 24.5L19.2 25.2C20.8667 24.7333 22.4333 23.9 23.9 22.7C25.3667 21.5 26.5 20.1 27.3 18.5L34.7 16C34.7 13.7333 34.0333 11.9667 32.7 10.7C31.4333 9.43333 30.8 8.76666 30.8 8.7L29.6 8.8C29.4 8.8 28.8333 8.6 27.9 8.2C27.0333 7.73333 26.4 7.49999 26 7.49999C25.4 7.49999 24.9667 7.83333 24.7 8.5C24.4333 9.16667 24.2 10.1333 24 11.4C23.9333 12.1333 23.8 12.8333 23.6 13.5C23.4667 14.1667 23.2333 14.6 22.9 14.8H25.4C25.1333 15.2667 24.7667 15.6667 24.3 16C23.9 16.2667 23.5 16.5 23.1 16.7C22.1667 17.1667 21.4667 17.7 21 18.3C20.6 18.8333 20.4 19.7333 20.4 21C20.4 21.4667 20.4667 21.8 20.6 22C20.8 22.2 21.1667 22.3 21.7 22.3ZM28.6 19.1C28.6 19.4333 28.8 19.9667 29.2 20.7C29.6667 21.3667 30.0333 21.7 30.3 21.7C30.7667 21.7 31.6667 20.9667 33 19.5C33.8 18.5667 34.5667 17.8333 35.3 17.3C32.3 17.3 30.0667 17.9 28.6 19.1ZM35.9 35.8C38.3667 33.7333 39.6 31.6667 39.6 29.6C39.6 28.4 39.5 27.3667 39.3 26.5C39.1667 25.6333 38.7333 25.2 38 25.2C37.7333 25.2667 37.4 25.4333 37 25.7C36.6 25.9667 36.2333 26.2667 35.9 26.6L38.3 24.1C38.3 23.8333 37.9333 22.8333 37.2 21.1C36.5333 19.3667 36.1 18.5 35.9 18.5H35.3L31 22.8L30.9 23.2C30.9 23.5333 31.1 23.8667 31.5 24.2C31.9667 24.4667 32.4 24.6333 32.8 24.7C32.4667 24.7667 32.2667 24.9667 32.2 25.3C32.1333 25.6333 32.1 25.9667 32.1 26.3C32.1 27.7667 32.4333 28.5 33.1 28.5C33.3 28.5 33.8333 28.2333 34.7 27.7C34.7 28.1667 34.5667 28.7333 34.3 29.4C34.1 30.0667 34 30.6 34 31C34.4667 31 34.8333 30.9667 35.1 30.9C35.4333 30.8333 35.7333 30.7667 36 30.7C36.9333 30.4333 37.7 30.3 38.3 30.3C38.1 30.7 37.6667 31.0333 37 31.3C36.4 31.5 35.9333 31.7 35.6 31.9C35.3333 32.1 35.2 32.5333 35.2 33.2V33.8C35.2 34.6667 35.4333 35.3333 35.9 35.8ZM22.3 27.1C22.1 27.6333 21.7667 28 21.3 28.2C20.8333 28.4 20.1667 28.5667 19.3 28.7C18.2333 28.9 17.4333 29.1667 16.9 29.5C16.4333 29.8333 16.2 30.5 16.2 31.5C16.2 31.6333 16.2667 31.7667 16.4 31.9C16.6 32.0333 16.7333 32.1 16.8 32.1C22.2667 28.9 25 26 25 23.4H24.3C23.9 23.4 22.8 24.0333 21 25.3C19.2667 26.5667 18.4 27.4 18.4 27.8C18.9333 27.8 19.6 27.7 20.4 27.5C21.2 27.2333 21.8333 27.1 22.3 27.1ZM27.3 24.1C26.7667 27.3 25.8333 30.5333 24.5 33.8C23.2333 37 21.7 39.9333 19.9 42.6L19.8 42.9C19.8 43.9 21.0333 44.4 23.5 44.4C24.7667 44.4 25.9 44.3667 26.9 44.3C27.9 44.2333 28.7333 44.1667 29.4 44.1C32.0667 43.8333 34.0667 43.7 35.4 43.7C35.4 42.5 34.7667 40.4333 33.5 37.5C33.3667 37.2333 33.1 36.6333 32.7 35.7C32.3 34.7 32.1 33.9333 32.1 33.4L27.3 24.1ZM21.7 29.5C20.9667 30.3667 19.8 31.3333 18.2 32.4C17.6 32.8 17.0667 33.2 16.6 33.6C16.1333 34 15.9 34.3667 15.9 34.7C18.1 34.7 19.6 34.4 20.4 33.8C21.2 33.1333 21.8333 31.7 22.3 29.5H21.7ZM37 36.7C37 36.7 37.0667 36.8667 37.2 37.2C37.3333 37.4667 37.5333 37.6 37.8 37.6C38.2 37.6 38.8333 37.5 39.7 37.3C40.5667 37.1 41.1667 37 41.5 37L37.8 38.9L37.7 39.1C37.7 39.4333 37.8333 39.8 38.1 40.2C38.3667 40.6 38.5667 40.8 38.7 40.8C39.7 40.8 40.5333 40.3667 41.2 39.5C41.8667 38.6333 42.2 37.7 42.2 36.7C42.2 35.7667 42.0333 34.7667 41.7 33.7C41.3667 32.6333 40.8667 32.1 40.2 32.1C39.7333 32.7 38.9333 33.9333 37.8 35.8C37.2667 36.3333 37 36.6333 37 36.7ZM15.5 35.8C14.9 35.8 14.4333 36.1333 14.1 36.8C13.8333 37.4 13.6 38.0333 13.4 38.7C13.2 39.3667 13.0667 39.8333 13 40.1C13.6 39.7667 14.6333 39.1667 16.1 38.3C17.6333 37.3667 18.9 36.5333 19.9 35.8H15.5ZM19.2 37.6C18.9333 37.7333 18.5 37.9333 17.9 38.2C17.3 38.4667 16.8333 38.8 16.5 39.2C16.1667 39.5333 16 39.9667 16 40.5C16.6667 40.5 17.3667 40.2333 18.1 39.7C18.9 39.1667 19.3 38.6 19.3 38L19.2 37.6ZM39.5 51.2C39.7667 51.7333 40.0333 52.1 40.3 52.3C40.5667 52.4333 40.9667 52.5 41.5 52.5C42.6333 52.5 43.5333 52.0333 44.2 51.1C44.8667 50.1 45.2 49.0333 45.2 47.9C45.2 46.7 45.1 45.6333 44.9 44.7C44.7 43.7667 44.4333 42.8 44.1 41.8C43.7667 40.7333 43.5333 39.9667 43.4 39.5C42.6 39.5 41.8333 39.8 41.1 40.4C40.3667 41 39.8333 41.7333 39.5 42.6H42.6V43.2C42.3333 43.5333 41.5 44.5 40.1 46.1C38.7 47.6333 37.7 48.9333 37.1 50L38.3 50.1C39.1 50.1 40.1667 49.7667 41.5 49.1C42.8333 48.5 43.8333 48.2 44.5 48.2C43.7667 49.1333 42.1 50.1333 39.5 51.2ZM16.2 41.4C14.4667 41.4 13.1667 41.6667 12.3 42.2C11.5 42.6667 11.1 43.6333 11.1 45.1L11.2 46.3C11.6 46.0333 12.2333 45.6333 13.1 45.1C14.0333 44.5667 14.8 44 15.4 43.4C16.0667 42.8 16.5333 42.1333 16.8 41.4H16.2ZM40.9 43.9C39.9667 43.9 39.5 44.3 39.5 45.1L40.9 43.9ZM15 47.5V45.1L12.4 47.5H15ZM28.4 51C29.9333 51 31.2667 50.8 32.4 50.4C33.6 50 34.5667 49.2667 35.3 48.2C35.1 47.8 34.6 47.5 33.8 47.3C33.0667 47.0333 32.5 46.9 32.1 46.9C31.7 46.9 31.1333 47.2667 30.4 48C29.6667 48.6667 29.2333 49.1333 29.1 49.4V48.2C28.0333 48.6667 27.2 49.0667 26.6 49.4C26.0667 49.7333 25.8 50.2333 25.8 50.9L28.4 51ZM17 50.6C18.0667 50.6 19.1 50.4667 20.1 50.2C21.1667 49.9333 21.7 49.4333 21.7 48.7C21.7 48.3 21.5667 48 21.3 47.8C21.1 47.5333 20.8333 47.4 20.5 47.4C20.3 47.4 19.5667 47.7333 18.3 48.4C17.0333 49 16.1 49.5333 15.5 50C15.6333 50.4 15.9333 50.6 16.4 50.6H17ZM25.4 48C24.7333 47.9333 24.1333 48.1333 23.6 48.6C23.0667 49 22.8 49.5667 22.8 50.3C24.1333 50.3 25.4333 49.6 26.7 48.2L25.4 48ZM10 51.8C10.1333 51.7333 10.6333 51.5 11.5 51.1C12.4333 50.6333 13.1667 50.0667 13.7 49.4C13.5667 48.9333 13.0667 48.7 12.2 48.7C11.4667 48.7 10.9 48.9333 10.5 49.4C10.1 49.8667 9.9 50.4667 9.9 51.2L10 51.8ZM35.1 50.4C35.9667 50.4 36.4667 49.8667 36.6 48.8C35.6 48.8667 35.1 49.4 35.1 50.4ZM42.6 56.7C42.6 57.6333 42.9667 58.1 43.7 58.1C44.3667 58.1 45.0667 57.5 45.8 56.3C46.6 55.1 47 54.1333 47 53.4V52.9C47 51.3 46.7 50.5 46.1 50.5C46.0333 50.5667 45.4 51 44.2 51.8C43.0667 52.5333 42.3667 53.1667 42.1 53.7C42.1667 53.7 42.2667 53.8 42.4 54C42.5333 54.2 42.7333 54.3 43 54.3C43.4 54.1667 43.9667 54.0667 44.7 54C45.4333 53.8667 45.9667 53.7667 46.3 53.7C45.9667 54.2333 45.3333 54.6333 44.4 54.9C43.7333 55.1667 43.2667 55.4333 43 55.7C42.7333 55.9 42.6 56.2333 42.6 56.7ZM9.4 54.3C11.0667 54.3 12.5 53.4667 13.7 51.8H13C12.0667 51.8 10.8667 52.6333 9.4 54.3ZM8.1 58.6C8.7 58.2667 9.4 57.7667 10.2 57.1C11.0667 56.3667 11.6333 55.8667 11.9 55.6L10.6 55.5C10 55.5 9.4 55.8333 8.8 56.5C8.26667 57.1667 8 57.6 8 57.8L8.1 58.6ZM48 55.5C47.7333 55.5 47.3333 55.8333 46.8 56.5C46.2667 57.1667 45.8 57.8333 45.4 58.5C45 59.1 44.7 59.5667 44.5 59.9C45.3 59.9 46.2333 59.7333 47.3 59.4C48.3667 59 48.9 58.4667 48.9 57.8C48.9 56.2667 48.6 55.5 48 55.5ZM46.9 63.5L50.1 60.6V59.6C49.3 59.6 48.2667 59.8 47 60.2C45.8 60.6 45.2 61.1 45.2 61.7C45.2 62.0333 45.3667 62.4333 45.7 62.9C46.0333 63.3667 46.3667 63.6 46.7 63.6L46.9 63.5ZM51.3 67.9C52.2333 67.9 52.7 67.5333 52.7 66.8C52.7 65.6667 52.0333 63.9667 50.7 61.7C50.5667 61.8333 50.1667 62.1 49.5 62.5C48.9 62.8333 48.4 63.2333 48 63.7C47.6 64.1 47.4 64.5 47.4 64.9C48.2667 64.9 49.1667 64.6667 50.1 64.2L47.7 66.7C47.9667 67.5 49.1667 67.9 51.3 67.9ZM5.6 66.7C5.66667 66.5667 6.13333 66.0333 7 65.1C7.93333 64.1 8.5 63.2 8.7 62.4L7.8 62.3C6.86667 62.3 6.06667 62.8333 5.4 63.9C4.73333 64.9667 4.4 66 4.4 67C4.4 67.4667 4.43333 67.8333 4.5 68.1C4.63333 68.3667 4.9 68.5 5.3 68.5C5.63333 68.5 5.9 68.2667 6.1 67.8C6.3 67.2667 6.4 66.9 6.4 66.7H5.6ZM61.4477 61.5C61.4477 57.9667 61.481 54.7 61.5477 51.7C61.6143 48.7 61.681 46 61.7477 43.6C62.0143 34 62.1477 26.3333 62.1477 20.6V16.9C62.1477 14.4333 62.2143 12.1667 62.3477 10.1C62.481 8.03333 62.8143 5.6 63.3477 2.8C63.481 2 63.8143 1.5 64.3477 1.3C64.9477 1.03333 65.7143 0.899997 66.6477 0.899997C68.7143 0.899997 70.1143 1.16666 70.8477 1.7C71.581 2.16666 71.9477 3.06666 71.9477 4.4C71.9477 4.8 71.8477 5.23333 71.6477 5.69999C71.4477 6.1 71.1477 6.4 70.7477 6.59999L71.4477 7.09999C71.381 7.36666 71.3477 8.13333 71.3477 9.39999C71.3477 9.66666 71.681 14.7 72.3477 24.5L72.5477 26.9L73.2477 27.6C75.581 26.3333 78.181 25.5 81.0477 25.1C83.981 24.6333 87.1477 24.4 90.5477 24.4C90.6143 24.6667 90.981 24.9667 91.6477 25.3C92.381 25.5667 93.181 25.8333 94.0477 26.1C96.181 26.9 97.8477 27.6333 99.0477 28.3C100.248 28.9667 100.848 29.8 100.848 30.8C101.981 30.8 102.881 31.5 103.548 32.9C104.214 34.3 104.881 36.2667 105.548 38.8C106.014 40.6 106.381 41.9 106.648 42.7C106.981 43.5 107.381 44 107.848 44.2C107.781 44.4 107.748 45.1 107.748 46.3C107.748 46.8333 107.781 47.4 107.848 48C107.981 48.5333 108.048 48.9333 108.048 49.2C108.248 50.2 108.348 51.2 108.348 52.2L107.848 54.7C107.914 54.7667 107.981 54.8667 108.048 55C108.181 55.1333 108.281 55.2333 108.348 55.3C108.348 56.3667 107.714 57.8 106.448 59.6C104.181 63.6667 101.281 66.6333 97.7477 68.5C94.281 70.3667 90.1143 71.3 85.2477 71.3C83.6477 71.3 81.5143 70.7667 78.8477 69.7C76.381 68.7 74.4143 68.2 72.9477 68.2C72.7477 68.2 72.481 68.5333 72.1477 69.2C71.8143 69.8 71.481 70.3 71.1477 70.7C70.8143 71.1 70.3143 71.3 69.6477 71.3C68.3143 71.3 66.9477 71.1667 65.5477 70.9C64.1477 70.5667 63.0143 70.1 62.1477 69.5L61.4477 61.5ZM70.7477 32.5C69.881 31.1667 69.281 29.7667 68.9477 28.3C68.681 26.7667 68.5477 25.0333 68.5477 23.1L68.6477 17.6H68.2477L68.9477 16.4V5.19999C68.9477 4.8 68.6477 4.43333 68.0477 4.1C67.4477 3.7 66.9143 3.5 66.4477 3.5C65.8477 3.5 65.4477 3.66667 65.2477 4C65.1143 4.33333 65.0477 4.86666 65.0477 5.6C65.0477 7.06666 65.1477 7.86666 65.3477 7.99999C65.6143 8.13333 65.7477 8.26666 65.7477 8.4C65.7477 8.6 65.5477 9.1 65.1477 9.9C64.8143 10.7 64.6477 11.2333 64.6477 11.5C64.6477 11.5667 64.8143 11.7667 65.1477 12.1C65.5477 12.4333 65.7477 12.6333 65.7477 12.7C65.7477 12.9667 65.6143 13.3667 65.3477 13.9C65.1477 14.3667 65.0477 15.1333 65.0477 16.2C65.0477 18 65.5143 18.9 66.4477 18.9L65.1477 21.4L66.4477 21.9L66.0477 21.8C65.381 21.8 65.0477 22.4 65.0477 23.6C65.0477 24.4667 65.1477 25.0333 65.3477 25.3C65.6143 25.5 65.7477 25.6667 65.7477 25.8C65.7477 26 65.681 26.3 65.5477 26.7C65.4143 27.0333 65.281 27.3333 65.1477 27.6L67.1477 28.4H65.1477V32.5H70.7477ZM97.7477 63.1C97.7477 63.2333 97.8477 63.4 98.0477 63.6C98.2477 63.8 98.4477 63.9 98.6477 63.9C99.1143 63.3 99.681 62.8 100.348 62.4C100.881 62 101.248 61.6 101.448 61.2C101.714 60.8 101.848 60.2 101.848 59.4C102.714 59.4 103.414 59.3 103.948 59.1C104.481 58.9 104.748 58.4333 104.748 57.7C104.681 57.5667 104.581 57.3667 104.448 57.1C104.314 56.8333 104.181 56.6333 104.048 56.5H105.348C105.748 56.5 105.948 55.0667 105.948 52.2C105.948 41.2667 103.514 34.2667 98.6477 31.2L98.7477 31C98.7477 30.6 97.8143 30.1667 95.9477 29.7C94.081 29.1667 92.1143 28.7 90.0477 28.3C88.0477 27.9 86.6477 27.6667 85.8477 27.6C83.0477 27.6 80.6477 28.0333 78.6477 28.9C76.7143 29.7667 74.681 31.1667 72.5477 33.1L73.2477 33.7L76.9477 30.6C77.281 30.6 78.8477 30.4 81.6477 30C85.5143 29.5333 87.681 29.3 88.1477 29.3L91.6477 29.4C93.1143 31.1333 94.2477 32 95.0477 32L95.4477 31.9L97.8477 37.4L99.0477 36.7V39.9C99.6477 39.9 100.114 40.2333 100.448 40.9C100.781 41.5 101.114 42.4667 101.448 43.8C101.714 44.8667 101.948 45.6 102.148 46C102.014 46 101.881 46.1333 101.748 46.4C101.614 46.6667 101.548 46.8667 101.548 47C101.548 47.1333 101.748 47.4 102.148 47.8C102.081 48.1333 101.981 48.5 101.848 48.9C101.781 49.3 101.714 49.6 101.648 49.8C101.648 50.2667 101.748 50.6333 101.948 50.9C102.148 51.1 102.481 51.3667 102.948 51.7C103.481 52.0333 103.748 52.4667 103.748 53H103.048C102.781 53 102.548 53.0667 102.348 53.2C102.214 53.3333 102.148 53.6333 102.148 54.1C102.148 54.4333 102.181 54.7 102.248 54.9C102.381 55.0333 102.614 55.1667 102.948 55.3C102.414 55.5667 102.048 55.8333 101.848 56.1C101.648 56.3667 101.548 56.7333 101.548 57.2C101.548 57.8 101.748 58.2 102.148 58.4C101.214 58.4 100.248 58.9667 99.2477 60.1C98.3143 61.1667 97.8477 62.1333 97.8477 63L97.7477 63.1ZM67.1477 31.2L65.7477 31.9C66.0143 31.4333 66.381 31.2 66.8477 31.2H67.1477ZM78.3477 62.5C78.8143 62.5 79.5143 62.7 80.4477 63.1C81.381 63.4333 81.8477 63.7 81.8477 63.9V64.5H88.1477L88.6477 65.1L89.2477 63.9C89.6477 63.7 90.4477 63.3667 91.6477 62.9C92.8477 62.3667 93.6143 62.1 93.9477 62.1C95.881 62.1 97.2143 60.8 97.9477 58.2C98.7477 55.6 99.1477 53 99.1477 50.4C99.1477 48.2667 98.781 45.8 98.0477 43C97.3143 40.1333 96.1477 37.6667 94.5477 35.6C92.9477 33.5333 90.981 32.5 88.6477 32.5C88.1143 32.5 85.0477 32.7 79.4477 33.1C77.781 33.5 76.281 34.6667 74.9477 36.6C73.681 38.4667 72.6477 40.6 71.8477 43C71.1143 45.3333 70.7477 47.1667 70.7477 48.5C70.7477 50.6333 71.181 52.4333 72.0477 53.9C72.9143 55.3 74.1477 56.8333 75.7477 58.5C76.6143 59.4333 77.2477 60.2 77.6477 60.8C78.1143 61.4 78.3477 61.9667 78.3477 62.5ZM66.4477 33.6C65.781 33.6 65.3477 33.8333 65.1477 34.3L65.7477 34.4C66.1477 34.4 66.4477 34.3667 66.6477 34.3C66.8477 34.2333 67.0143 34.0333 67.1477 33.7L66.4477 33.6ZM71.0477 33.7C70.181 33.7 69.3143 33.8667 68.4477 34.2C67.6477 34.5333 66.981 35 66.4477 35.6H67.1477C67.3477 35.6 68.0143 35.3333 69.1477 34.8C70.3477 34.2 71.1143 33.8333 71.4477 33.7H71.0477ZM71.4477 35.6C70.3143 35.8667 69.0477 36.3333 67.6477 37C66.3143 37.6 65.6477 38.4 65.6477 39.4C69.581 39.4 71.5477 38.4333 71.5477 36.5L71.4477 35.6ZM65.1477 44.8H65.7477L68.9477 41.7V41.1H65.1477V44.8ZM67.5477 44.2C67.1477 44.6 66.9477 45.0667 66.9477 45.6C67.481 45.6 67.9143 45.3333 68.2477 44.8L67.5477 44.2ZM65.1477 50.6C66.881 50.6 67.7477 50.0667 67.7477 49C67.1477 49 66.481 49.2667 65.7477 49.8C65.7477 49.5333 66.0477 49.0333 66.6477 48.3C67.3143 47.5667 67.6477 47.1333 67.6477 47C67.6477 46.7333 67.3477 46.5 66.7477 46.3C66.1477 46.1 65.6143 46 65.1477 46V50.6ZM67.3477 51.5C65.8143 51.5 65.0477 51.9667 65.0477 52.9L65.1477 53.4C65.6143 53.2667 66.081 53.0333 66.5477 52.7C67.081 52.3667 67.3477 51.9667 67.3477 51.5ZM68.5477 55.3V55C68.5477 53.7333 68.2143 53.0333 67.5477 52.9L65.1477 55.3H68.5477ZM67.3477 56.5C65.8143 56.5 65.0477 56.9667 65.0477 57.9C65.981 57.9 67.0477 57.4333 68.2477 56.5H67.3477ZM69.5477 57.2C69.081 57.2 68.2143 57.5333 66.9477 58.2C65.7477 58.8667 65.1477 59.3333 65.1477 59.6V60.3C66.481 60.3 67.7477 60.0333 68.9477 59.5C70.1477 58.9667 70.7477 58.6 70.7477 58.4C70.7477 57.8667 70.6477 57.5333 70.4477 57.4C70.2477 57.2667 69.9477 57.2 69.5477 57.2ZM68.9477 61.5C69.081 61.5 69.981 61.8333 71.6477 62.5C73.3143 63.1 74.4477 63.4 75.0477 63.4C74.7143 63.0667 74.3477 62.6 73.9477 62C73.6143 61.3333 73.281 60.8667 72.9477 60.6C72.681 60.2667 72.281 60.1 71.7477 60.1C71.081 60.1 70.5477 60.2 70.1477 60.4C69.8143 60.6 69.4143 60.9667 68.9477 61.5ZM67.1477 60.8C66.1477 61.2 65.5477 61.6667 65.3477 62.2C65.1477 62.7333 65.0477 63.3667 65.0477 64.1C65.0477 64.7667 65.0477 65.2333 65.0477 65.5C66.2477 65.5 67.3143 64.8 68.2477 63.4H67.3477C66.281 63.4 65.7477 63.1333 65.7477 62.6L67.1477 60.8ZM75.0477 64.5C75.9143 65.5 76.581 66 77.0477 66C77.0477 65.5333 76.9143 65.1667 76.6477 64.9C76.4477 64.5667 76.1477 64.4 75.7477 64.4L75.0477 64.5ZM96.9477 64.5C96.3477 64.5 95.5143 64.7333 94.4477 65.2C93.381 65.6 92.8477 66.1 92.8477 66.7L92.9477 66.9C94.8143 66.7 96.281 65.9 97.3477 64.5H96.9477ZM68.2477 65.1C67.581 65.7 67.081 66.2 66.7477 66.6C66.4143 66.9333 66.2477 67.3667 66.2477 67.9H66.6477C67.381 67.9 67.9477 67.8333 68.3477 67.7C68.7477 67.5 68.9477 67.1 68.9477 66.5C68.9477 66.1 68.9143 65.8 68.8477 65.6C68.781 65.4 68.581 65.2333 68.2477 65.1ZM88.3477 68.3C90.281 68.3 91.381 67.8333 91.6477 66.9L87.3477 68.2L88.3477 68.3ZM81.2477 67.7C81.6477 68.1 82.3143 68.3 83.2477 68.3L86.2477 68.2C85.6477 67.9333 85.081 67.7667 84.5477 67.7C84.0143 67.6333 83.4143 67.6 82.7477 67.6L81.2477 67.7ZM148.528 25C153.395 28.2667 156.861 31.9667 158.928 36.1C161.061 40.2333 162.128 45.3 162.128 51.3L162.028 54.6C161.895 54.9333 161.628 55.2 161.228 55.4C160.895 55.6 160.628 55.8 160.428 56C160.228 56.2 160.128 56.5667 160.128 57.1C160.128 57.3667 160.161 57.6333 160.228 57.9C160.295 58.1 160.461 58.2667 160.728 58.4C160.328 58.4 159.995 58.6667 159.728 59.2C159.528 59.6667 159.195 60.5333 158.728 61.8C158.195 63.6667 157.661 64.8 157.128 65.2C153.461 67.9333 149.561 69.9 145.428 71.1C141.295 72.3 136.728 72.9 131.728 72.9L123.928 68C122.795 68 121.861 67.6333 121.128 66.9C120.395 66.1667 119.661 65.0667 118.928 63.6C118.461 62.8667 117.961 62.1333 117.428 61.4C116.895 60.6 116.328 60 115.728 59.6C114.795 57.3333 114.161 55 113.828 52.6C113.495 50.1333 113.328 47.3667 113.328 44.3L117.128 33.7C117.195 33.5667 117.995 32.7 119.528 31.1C121.128 29.5 122.528 28.1333 123.728 27C125.528 25.4 127.761 24.0667 130.428 23C133.095 21.9333 135.628 21.4 138.028 21.4C139.761 21.4 141.528 21.7333 143.328 22.4C145.195 23.0667 146.928 23.9333 148.528 25ZM125.828 30C125.828 30.2667 125.528 30.6 124.928 31C124.395 31.3333 124.128 31.7 124.128 32.1H125.528C127.661 32.1 128.728 31.8 128.728 31.2L126.928 30C126.928 29.8667 126.995 29.7333 127.128 29.6C127.261 29.4667 127.395 29.4 127.528 29.4C127.995 29.4 128.561 29.5333 129.228 29.8C129.961 30 130.461 30.1 130.728 30.1C131.261 30.1 131.761 29.9333 132.228 29.6C132.695 29.2667 133.195 28.8 133.728 28.2C134.528 27.2667 135.328 26.6667 136.128 26.4H135.228H134.528C134.128 26.4 133.828 26.3667 133.628 26.3C133.428 26.1667 133.228 25.9667 133.028 25.7C132.428 25.7 131.795 25.8667 131.128 26.2C130.528 26.4667 129.795 26.9333 128.928 27.6C127.595 28.5333 126.495 29.1333 125.628 29.4C125.761 29.6 125.828 29.8 125.828 30ZM141.928 25.7C141.728 25.7 141.261 26.0333 140.528 26.7C139.861 27.3667 139.428 27.8667 139.228 28.2L141.728 28.7C144.395 29.1667 146.028 29.4 146.628 29.4C146.961 29.4 147.261 29.3667 147.528 29.3C147.795 29.2333 148.128 29.0667 148.528 28.8C147.861 27.9333 146.828 27.2 145.428 26.6C144.095 26 142.928 25.7 141.928 25.7ZM147.628 30C147.628 30.4667 147.928 30.8333 148.528 31.1C149.128 31.3 149.728 31.4 150.328 31.4V30H147.628ZM139.528 31.1C137.261 31.1 135.361 31.5 133.828 32.3C132.295 33.1 130.595 34.4 128.728 36.2C128.328 36.5333 128.061 37.2333 127.928 38.3C127.861 38.9 127.761 39.3667 127.628 39.7C127.495 40.0333 127.261 40.3 126.928 40.5C126.661 41.1 126.295 42.4333 125.828 44.5C125.361 46.5 125.095 47.8333 125.028 48.5C124.961 48.9 124.928 49.4333 124.928 50.1C124.928 55.7 127.828 59.9 133.628 62.7L138.328 62.9C142.328 62.9 145.395 62.2667 147.528 61C149.728 59.7333 151.228 57.8667 152.028 55.4C152.895 52.9333 153.328 49.7 153.328 45.7C153.328 44.6333 153.028 43.0667 152.428 41C151.895 38.8667 151.361 37.2667 150.828 36.2C149.028 35.8 147.395 34.3667 145.928 31.9C145.195 31.9 144.161 31.7667 142.828 31.5C141.361 31.2333 140.261 31.1 139.528 31.1ZM151.828 31.1C151.495 31.1 151.228 31.2667 151.028 31.6C150.895 31.8667 150.828 32.1667 150.828 32.5C150.828 33.5 151.261 34.1333 152.128 34.4C152.261 34.3333 152.561 34.1667 153.028 33.9C153.561 33.6333 153.895 33.3667 154.028 33.1C153.761 32.8333 153.328 32.4333 152.728 31.9C152.195 31.3667 151.895 31.1 151.828 31.1ZM122.828 32.5C122.628 32.5 122.228 32.7667 121.628 33.3C121.095 33.8333 120.795 34.2667 120.728 34.6C120.728 35.4 121.295 35.8 122.428 35.8C122.828 35.8 123.295 35.8 123.828 35.8C124.428 35.7333 124.828 35.6667 125.028 35.6L125.628 33.1L122.828 32.5ZM152.728 34.9V35.8C153.861 35.8 154.495 35.5 154.628 34.9H152.728ZM119.828 36.2C119.161 36.2 118.695 36.6333 118.428 37.5C118.161 38.3667 118.028 39.2 118.028 40C119.161 40 120.295 39.7667 121.428 39.3C122.561 38.8333 123.328 38.2 123.728 37.4C122.661 36.6 121.361 36.2 119.828 36.2ZM156.628 38.4C156.628 37.8 156.528 37.3 156.328 36.9C156.128 36.4333 155.795 36.2 155.328 36.2C154.395 36.2 153.928 36.5 153.928 37.1C153.928 37.9667 154.828 38.4 156.628 38.4ZM121.628 41.2C122.428 41.2 122.995 41.0667 123.328 40.8C123.728 40.5333 124.061 40.0333 124.328 39.3L124.028 39.2C123.628 39.2 123.128 39.4333 122.528 39.9C121.928 40.3667 121.628 40.8 121.628 41.2ZM155.228 40.7C155.561 40.7 155.861 40.5667 156.128 40.3C156.461 39.9667 156.628 39.6333 156.628 39.3H155.228V40.7ZM158.928 43.6C158.928 43.2 158.761 42.7 158.428 42.1C158.161 41.4333 157.828 41.1 157.428 41.1C156.361 41.1 155.828 41.5 155.828 42.3C155.828 42.6333 155.928 43.0333 156.128 43.5C156.395 43.9 156.528 44.2 156.528 44.4V44.5C156.528 44.7 156.428 44.9 156.228 45.1C156.095 45.3 155.961 45.4 155.828 45.4L156.228 45.5C156.361 45.5 156.628 45.3333 157.028 45C157.428 44.6 157.695 44.3667 157.828 44.3C158.095 44.3 158.328 44.2333 158.528 44.1C158.795 43.9 158.928 43.7333 158.928 43.6ZM119.128 42.3C118.061 42.3 117.261 42.5667 116.728 43.1C116.261 43.6333 116.028 44.4667 116.028 45.6C116.895 45.6 117.728 45.3667 118.528 44.9C119.328 44.4333 120.228 43.8 121.228 43C121.228 42.5333 120.728 42.3 119.728 42.3C119.595 42.3 119.495 42.3333 119.428 42.4C119.361 42.4 119.295 42.4 119.228 42.4C119.161 42.4 119.128 42.4 119.128 42.4C119.128 42.3333 119.128 42.3 119.128 42.3ZM121.928 47.2C122.328 47.2 122.528 46.6333 122.528 45.5C122.528 44.3667 122.528 43.7333 122.528 43.6C122.261 43.8667 121.861 44.1333 121.328 44.4C120.795 44.6667 120.428 44.8667 120.228 45C118.428 45.8 117.395 46.5333 117.128 47.2H121.928ZM159.228 49.3C159.228 46.7 158.928 45.4 158.328 45.4L155.828 48C156.095 48.4667 156.561 48.8 157.228 49C157.895 49.2 158.561 49.3 159.228 49.3ZM116.128 52.3C116.861 52.3 117.961 51.9667 119.428 51.3C120.895 50.5667 121.628 49.8667 121.628 49.2H117.128C116.461 49.2 116.128 50.2333 116.128 52.3ZM155.728 54.8C158.261 54.8 159.528 53.9333 159.528 52.2C159.528 51.5333 159.261 51.1333 158.728 51C158.261 50.8 157.561 50.7 156.628 50.7C156.628 51.3667 156.461 52.0333 156.128 52.7C155.861 53.3667 155.728 54.0667 155.728 54.8ZM122.828 50.8C122.561 50.8 121.928 51.0333 120.928 51.5C119.995 51.9667 119.328 52.4 118.928 52.8L121.928 53.5C122.195 53.5 122.395 53.2333 122.528 52.7C122.728 52.1 122.828 51.4667 122.828 50.8ZM118.228 57.8C118.361 57.7333 118.695 57.5333 119.228 57.2C119.828 56.8 120.295 56.4 120.628 56C121.028 55.5333 121.228 55.0667 121.228 54.6L120.128 54.5C119.795 54.5 119.261 54.5667 118.528 54.7C117.861 54.7667 117.528 54.9667 117.528 55.3L118.228 57.8ZM119.428 59.6C120.628 59.4 122.061 58.8 123.728 57.8C123.728 57.2667 123.628 56.8 123.428 56.4C123.295 56 123.095 55.8 122.828 55.8L122.528 55.9L119.428 59V59.6ZM155.628 58.5C156.428 58.5 157.095 58.3 157.628 57.9C158.161 57.4333 158.428 56.7667 158.428 55.9H155.628C155.628 56.3667 155.461 56.8333 155.128 57.3C154.861 57.7667 154.495 58.1333 154.028 58.4L155.628 58.5ZM120.728 61.5C121.595 63.2333 122.295 64.1 122.828 64.1C123.561 64.1 124.328 63.8333 125.128 63.3C125.928 62.7 126.328 62.0333 126.328 61.3C125.261 61.3 124.595 61.5667 124.328 62.1V59L120.728 60.8V61.1V61.5ZM151.228 62.9C152.428 62.9 153.595 62.7333 154.728 62.4C155.928 62 156.528 61.2667 156.528 60.2C156.528 59.8 155.961 59.6 154.828 59.6C153.961 59.6 153.128 59.9333 152.328 60.6C151.595 61.2667 151.228 62.0333 151.228 62.9ZM125.628 66.4C126.095 66.4 126.495 66.3333 126.828 66.2C127.161 66 127.495 65.6667 127.828 65.2V67.2C128.628 67.2 129.395 67.0333 130.128 66.7C130.861 66.3667 131.228 65.8667 131.228 65.2C131.228 64.7333 130.761 64.3 129.828 63.9C128.961 63.5 128.295 63.3 127.828 63.3H127.528L123.728 64.5C123.728 65.0333 123.895 65.5 124.228 65.9C124.628 66.2333 125.095 66.4 125.628 66.4ZM152.728 63.8C152.461 63.8 151.861 63.8 150.928 63.8C150.061 63.8 149.261 63.9333 148.528 64.2C147.861 64.4 147.228 64.7333 146.628 65.2C145.828 65.8 145.395 66.1 145.328 66.1H137.328L135.528 68.1C136.395 68.5 137.195 68.7667 137.928 68.9C138.661 68.9667 139.561 69 140.628 69C141.895 69 143.428 68.6667 145.228 68C147.095 67.3333 148.795 66.6333 150.328 65.9C151.928 65.1 152.728 64.6333 152.728 64.5V63.8ZM154.628 65.8H154.428C153.895 65.8 153.528 66 153.328 66.4L154.628 65.8ZM129.728 68.7C131.595 68.7 132.528 67.8667 132.528 66.2C131.795 66.2 131.128 66.4667 130.528 67C129.995 67.4667 129.728 68.0333 129.728 68.7ZM134.328 67.1C134.995 67.1 135.595 66.8667 136.128 66.4L135.228 66.3H134.828C134.161 66.3 133.761 66.5333 133.628 67L134.328 67.1ZM147.828 69C148.228 69 148.495 68.9667 148.628 68.9C148.828 68.7667 148.961 68.5 149.028 68.1L147.128 68.9L147.828 69ZM142.928 70.7L142.328 70.6C141.928 70.6 141.628 70.6667 141.428 70.8C141.228 70.8667 141.095 71.0667 141.028 71.4L142.928 70.7ZM212.75 26C213.083 26 213.583 32.2 214.25 44.6C214.917 56.9333 215.25 65.1333 215.25 69.2C214.917 70.4 214.117 71.1667 212.85 71.5C211.583 71.8333 209.917 72 207.85 72C206.45 72 205.517 71.7667 205.05 71.3C204.583 70.8333 204.35 69.9333 204.35 68.6L204.45 65.7C204.183 65.9 203.517 66.6333 202.45 67.9C201.383 69.1 199.85 70.1333 197.85 71C195.85 71.8 193.117 72.2 189.65 72.2C184.783 72.2 181.05 70.1667 178.45 66.1C175.85 61.9667 174.35 57.0333 173.95 51.3L173.25 43.9V42.6C174.05 38.6 174.45 36.3667 174.45 35.9C174.45 35.1 174.35 33.9 174.15 32.3L173.95 29.1V28.1C173.95 27.1 174.117 26.1 174.45 25.1C174.85 24.0333 175.483 23.5 176.35 23.5L182.55 24.2C183.017 24.2 183.35 24.9 183.55 26.3C183.817 27.6333 183.95 28.9333 183.95 30.2C183.95 31.6667 183.883 33.1333 183.75 34.6L184.35 35.2L184.25 46.6C184.25 50.6 184.517 53.7 185.05 55.9C185.583 58.1 186.65 59.7667 188.25 60.9C189.85 61.9667 192.283 62.5 195.55 62.5C198.083 62.5 200.117 62.2667 201.65 61.8C203.183 61.3333 204.417 60.3 205.35 58.7L205.45 55.1C205.45 52.7 205.317 49.1 205.05 44.3C204.717 40.3 204.55 36.6667 204.55 33.4C204.55 32.1333 204.55 30.8333 204.55 29.5C204.617 28.1 204.683 27.1333 204.75 26.6L205.85 26H212.75ZM176.95 36C176.95 36.6667 177.15 37.0333 177.55 37.1C177.75 36.5 178.083 35.9667 178.55 35.5C179.083 34.9667 179.383 34.6667 179.45 34.6C180.117 33.9333 180.583 33.4 180.85 33C181.183 32.5333 181.35 31.9667 181.35 31.3C181.35 29.9667 181.183 29.3 180.85 29.3C180.517 29.2333 180.35 29.1333 180.35 29C180.35 28.7333 180.483 28.2333 180.75 27.5C180.75 26.8333 179.483 26.5 176.95 26.5V30.3L177.45 32.6C177.45 32.8667 177.35 33.3 177.15 33.9C177.017 34.4333 176.95 34.9667 176.95 35.5V36ZM207.25 33.1C208.383 33.3667 208.95 33.6333 208.95 33.9C208.95 34.0333 208.65 34.4 208.05 35C207.517 35.6 207.25 36.2 207.25 36.8C207.25 36.9333 207.283 37.1333 207.35 37.4C207.483 37.6 207.65 37.7 207.85 37.7C209.317 36.8333 210.183 36.0333 210.45 35.3C210.783 34.5 210.95 32.9667 210.95 30.7C210.95 29.9667 210.85 29.4 210.65 29C210.45 28.6 210.017 28.4 209.35 28.4L207.85 28.5L207.25 33.1ZM178.25 37.7C179.65 37.7 180.55 37.6 180.95 37.4C181.417 37.2 181.65 36.6 181.65 35.6C181.65 35.3333 181.517 34.8 181.25 34C179.45 35.5333 178.45 36.7667 178.25 37.7ZM209.05 40.7C208.717 40.7 208.317 40.8333 207.85 41.1C207.383 41.3667 207.15 41.5667 207.15 41.7C207.15 42.0333 207.25 42.4 207.45 42.8C207.65 43.2 207.883 43.4 208.15 43.4C208.95 43.4 209.717 42.6667 210.45 41.2C211.183 39.7333 211.55 38.5667 211.55 37.7C211.55 37.5 211.45 37.2667 211.25 37C211.117 36.7333 210.983 36.6 210.85 36.6L207.85 39.6L207.75 39.8C207.75 40.0667 207.883 40.3 208.15 40.5C208.417 40.6333 208.717 40.7 209.05 40.7ZM180.75 38.4C179.483 38.4 178.55 38.4667 177.95 38.6C177.417 38.7333 177.017 39.1 176.75 39.7C176.483 40.3 176.35 41.2667 176.35 42.6C177.417 41.8667 178.417 41.1 179.35 40.3C180.283 39.4333 180.75 38.8 180.75 38.4ZM181.95 40.1C181.95 39.9667 181.917 39.9 181.85 39.9C181.517 39.9 180.45 40.6 178.65 42C177.783 42.7333 177.217 43.1667 176.95 43.3V43.9L180.45 44.4C180.65 44.3333 180.883 44.2333 181.15 44.1C181.483 43.9 181.75 43.8 181.95 43.8V40.1ZM208.35 46C208.35 46.1333 208.45 46.4333 208.65 46.9C208.917 47.3 209.283 47.5 209.75 47.5C208.817 47.5 208.25 47.9333 208.05 48.8C207.85 49.6667 207.75 50.7667 207.75 52.1C208.75 52.1 209.583 51.7 210.25 50.9C210.983 50.1 211.35 49.2 211.35 48.2H210.25C210.783 47.8 211.083 47.1333 211.15 46.2C211.217 45.2 211.25 44.0333 211.25 42.7C210.383 42.7 209.683 43.0333 209.15 43.7C208.617 44.3667 208.35 45.1333 208.35 46ZM176.15 45.7C176.15 48.1667 176.417 49.4 176.95 49.4L180.15 46.4V45.7H176.15ZM181.95 46.4C180.217 47.9333 178.35 49.9667 176.35 52.5H181.95C182.017 52.5 182.117 52.3 182.25 51.9C182.45 51.4333 182.55 51.0333 182.55 50.7C182.55 49.9 182.45 49.1667 182.25 48.5C182.183 48.2333 182.117 47.9333 182.05 47.6C181.983 47.2667 181.95 46.8667 181.95 46.4ZM208.95 54.5C210.15 54.5 210.917 54.3667 211.25 54.1C211.583 53.7667 211.75 52.9667 211.75 51.7C211.083 51.7 210.45 52 209.85 52.6C209.25 53.1333 208.95 53.7667 208.95 54.5ZM176.95 55.5C176.95 56.6333 177.017 57.4667 177.15 58C177.35 58.5333 177.85 58.8 178.65 58.8C179.717 58.8 180.717 58.6 181.65 58.2C182.65 57.7333 183.15 57.0667 183.15 56.2C183.15 55.8 183.083 55.5 182.95 55.3C182.817 55.1 182.483 55 181.95 55C181.75 55.0667 181.35 55.4667 180.75 56.2C180.15 56.9333 179.717 57.5667 179.45 58.1L178.25 57.5C179.65 55.9 180.45 54.6667 180.65 53.8C180.183 53.8667 179.583 53.9 178.85 53.9C178.183 53.9 177.683 54 177.35 54.2C177.083 54.4 176.95 54.8333 176.95 55.5ZM209.05 55.6C208.583 55.6 208.35 56 208.35 56.8V57.5C208.35 58.2333 208.583 58.6333 209.05 58.7C210.317 57.4333 210.95 56.7333 210.95 56.6C210.95 56.4 210.717 56.2 210.25 56C209.783 55.7333 209.383 55.6 209.05 55.6ZM211.65 61.8C211.983 61.8 212.15 61.3667 212.15 60.5C212.083 60.1667 211.95 59.7667 211.75 59.3C211.55 58.8333 211.417 58.6 211.35 58.6C210.817 58.6 210.317 58.8333 209.85 59.3C209.383 59.7667 209.117 60 209.05 60C209.05 60.2667 209.117 60.5333 209.25 60.8C209.383 61 209.55 61.1333 209.75 61.2C209.15 62.1333 208.417 62.9 207.55 63.5C206.75 64.1 206.183 64.4 205.85 64.4C205.85 64.8 205.95 65.0667 206.15 65.2C206.35 65.3333 206.483 65.4333 206.55 65.5L210.25 63V61.4C210.517 61.4 210.783 61.4667 211.05 61.6C211.317 61.7333 211.517 61.8 211.65 61.8ZM181.25 66.1C182.85 66.5667 183.883 66.9667 184.35 67.3L188.05 65.5V64.9H186.85V63.6H181.25V62.9L182.55 63C184.15 63 184.95 62.6 184.95 61.8C184.95 61.6 184.883 61.3667 184.75 61.1C184.617 60.8333 184.483 60.6333 184.35 60.5L182.55 61.8C182.55 61.4 182.65 60.9 182.85 60.3C183.05 59.7 183.15 59.1667 183.15 58.7C182.95 58.8333 182.35 59.0333 181.35 59.3C180.35 59.5 179.55 59.7333 178.95 60C178.417 60.2667 178.15 60.6667 178.15 61.2L178.25 61.8L181.25 66.1ZM209.55 66.8C211.283 66.8 212.15 66.3 212.15 65.3C212.15 64.7 212.083 64.2667 211.95 64C211.883 63.6667 211.683 63.5 211.35 63.5C210.617 63.5 209.85 63.8667 209.05 64.6C208.317 65.3333 207.917 66.0333 207.85 66.7L209.55 66.8ZM203.55 64.9L202.25 64.8C201.517 64.8 200.95 64.8333 200.55 64.9C200.15 64.9667 199.683 65.1667 199.15 65.5H189.95C189.683 65.5 189.017 65.8333 187.95 66.5C186.95 67.1 186.183 67.6 185.65 68C186.65 68.8 188.583 69.2 191.45 69.2C192.05 69.2 192.55 69.1333 192.95 69C193.35 68.8667 193.783 68.5333 194.25 68V69.4C196.183 69.4 197.583 69.2 198.45 68.8C199.383 68.4 200.25 67.5 201.05 66.1L201.75 66.7L203.55 64.9ZM211.55 68.5V68L207.35 68.7L208.25 69.6L211.55 68.5ZM257.495 22.1C257.695 22.1 257.962 22.2667 258.295 22.6C258.695 22.8667 258.895 23.1 258.895 23.3V30.7L258.195 31.3C257.729 31.3 256.129 31.3 253.395 31.3C250.729 31.3 248.229 31.5 245.895 31.9L245.995 32.6C245.995 33.4667 245.762 34.5333 245.295 35.8C244.895 37.1333 244.695 38.1 244.695 38.7C244.695 38.8333 244.762 39 244.895 39.2C245.095 39.3333 245.229 39.4 245.295 39.4V49.8C245.762 50.2667 245.995 51.3 245.995 52.9L245.895 55.4C246.229 55.4667 246.429 56.2667 246.495 57.8C246.562 59.2667 247.062 60.6 247.995 61.8C248.995 63 250.962 63.7333 253.895 64C254.095 64 254.562 64.0667 255.295 64.2C256.029 64.2667 256.595 64.5 256.995 64.9C257.395 65.2333 257.595 65.7667 257.595 66.5C257.595 67.7 257.495 68.6 257.295 69.2C257.095 69.8 256.729 70.5333 256.195 71.4L255.195 73.2C254.062 73.1333 252.795 72.9 251.395 72.5C249.995 72.1 248.662 71.7 247.395 71.3C244.195 70.2333 241.895 69.6667 240.495 69.6C239.162 69.6 238.262 68.1667 237.795 65.3C237.395 62.3667 237.195 59.5667 237.195 56.9C237.195 55.0333 237.362 53.2667 237.695 51.6C237.762 51.1333 237.829 50.6 237.895 50C237.962 49.4 237.995 48.7333 237.995 48C237.995 44.8 237.562 39.4333 236.695 31.9C236.095 31.8333 235.495 31.7333 234.895 31.6C234.362 31.4667 233.895 31.3667 233.495 31.3C231.762 30.8333 230.529 30.6 229.795 30.6C229.462 30.6 229.062 30.1333 228.595 29.2C228.129 28.2 227.895 27.4 227.895 26.8C227.895 25.4667 228.329 24.6 229.195 24.2C230.062 23.8 231.295 23.5667 232.895 23.5C233.762 23.5 234.395 23.4667 234.795 23.4C235.195 23.2667 235.429 23.0333 235.495 22.7C235.495 21.1667 235.595 19.5333 235.795 17.8C236.062 16.0667 236.362 15.0333 236.695 14.7C237.562 15.0333 237.995 16.6 237.995 19.4L237.895 22.1L238.495 22.7C238.629 22.6333 239.395 22.2667 240.795 21.6C242.195 20.9333 242.895 20.3333 242.895 19.8L242.795 19C242.795 18.8 242.895 18.0667 243.095 16.8C243.295 15.5333 243.395 14.6 243.395 14H243.195C242.862 14 242.029 14.3333 240.695 15C239.362 15.6 238.629 15.9 238.495 15.9C238.829 15.5667 239.662 14.9333 240.995 14C239.662 13.7333 238.629 13.3333 237.895 12.8C238.495 12.3333 239.095 12.0333 239.695 11.9C240.362 11.7 241.162 11.5667 242.095 11.5C243.295 11.5 244.362 11.3333 245.295 11C245.295 11.2667 245.495 11.6 245.895 12C246.295 12.3333 246.495 12.6 246.495 12.8C246.429 13.0667 246.329 13.4667 246.195 14C246.062 14.4667 245.962 14.9 245.895 15.3C245.895 17.5667 246.129 19.2333 246.595 20.3C247.062 21.3667 247.762 22.0333 248.695 22.3C249.695 22.5667 251.229 22.7 253.295 22.7C253.762 22.7 254.429 22.6 255.295 22.4C256.162 22.2 256.895 22.1 257.495 22.1ZM242.795 18.9V19V18.9ZM245.895 25.1C245.429 24.9 244.795 24.3333 243.995 23.4C243.929 23.3333 243.695 23.1 243.295 22.7C242.962 22.2333 242.629 22 242.295 22C241.362 22 240.895 22.4333 240.895 23.3H241.595C241.062 24.1667 240.062 24.8333 238.595 25.3C237.129 25.7667 235.362 26.1667 233.295 26.5C232.562 26.6333 231.895 26.7667 231.295 26.9C230.762 27.0333 230.495 27.1667 230.495 27.3C230.495 27.7 231.229 28.0667 232.695 28.4C234.229 28.7333 235.329 28.9 235.995 28.9L241.595 24.5H242.895L239.695 27.6V28.2L245.895 25.1ZM248.995 25.1C248.462 25.1 247.995 25.2667 247.595 25.6C247.262 25.8667 246.895 26.3333 246.495 27C246.829 26.9333 247.362 26.7 248.095 26.3C248.895 25.8333 249.395 25.4333 249.595 25.1H248.995ZM256.395 25.8L253.395 25.7L250.295 25.8C249.762 25.8667 248.995 26.2333 247.995 26.9C246.995 27.5 246.495 27.9333 246.495 28.2V29C246.829 29 247.462 28.7333 248.395 28.2C249.329 27.6667 249.962 27.2667 250.295 27L248.995 28.9C249.795 28.9 250.929 28.7667 252.395 28.5C252.795 28.4333 253.262 28.3667 253.795 28.3C254.329 28.2333 254.962 28.2 255.695 28.2L256.395 25.8ZM243.395 28.2V27.6C243.062 27.8 242.729 28 242.395 28.2C242.129 28.3333 241.862 28.5 241.595 28.7C239.462 29.7667 238.395 30.6333 238.395 31.3H239.695L243.395 28.2ZM242.195 31.9C241.395 31.9 240.662 32.2667 239.995 33C239.395 33.6667 239.095 34.3 239.095 34.9V35.4C239.095 36.3333 239.295 36.8333 239.695 36.9C240.429 36.3667 241.029 35.7333 241.495 35C242.029 34.2 242.295 33.4 242.295 32.6L242.195 31.9ZM245.395 63.1C245.395 62.5 245.162 62.2 244.695 62.2L243.795 62.3L244.095 58.5C243.962 57.3667 243.762 56.2 243.495 55C243.229 53.7333 243.029 52.8333 242.895 52.3L242.195 51.7L242.895 51.1L242.995 48.8C242.995 47.2667 242.862 45.1667 242.595 42.5C242.262 40.1667 242.095 38 242.095 36C241.295 36 240.695 36.5 240.295 37.5C239.895 38.4333 239.695 39.3667 239.695 40.3C239.695 41.2333 239.795 41.8 239.995 42C240.195 42.1333 240.295 42.2667 240.295 42.4C240.295 42.6667 240.162 42.9667 239.895 43.3C239.695 43.6333 239.595 44.1 239.595 44.7C239.595 46.1 239.929 46.8 240.595 46.8H240.795C240.529 47.0667 240.262 47.6667 239.995 48.6C239.795 49.5333 239.695 50.3667 239.695 51.1C240.162 51.1 240.395 51.2667 240.395 51.6C240.395 51.8667 240.162 52.3333 239.695 53C239.229 53.6 238.995 53.9333 238.995 54C238.995 54.8 239.162 55.5333 239.495 56.2C239.829 56.8667 239.995 57.3333 239.995 57.6C239.995 58.1333 239.695 58.8333 239.095 59.7C239.162 59.9 239.329 60.2667 239.595 60.8C239.862 61.2667 240.095 61.5 240.295 61.5C240.695 61.5 241.162 61.4333 241.695 61.3C242.295 61.1667 242.695 61.0333 242.895 60.9C242.629 61.3 242.095 61.7 241.295 62.1C240.562 62.5 240.029 62.7333 239.695 62.8C239.695 65.9333 241.629 67.5 245.495 67.5C245.495 68.9 245.995 69.6 246.995 69.6C247.329 69.6 247.695 69.5 248.095 69.3C248.495 69.0333 248.795 68.7 248.995 68.3C249.129 68.3 249.229 68.3667 249.295 68.5C249.362 68.5667 249.462 68.6 249.595 68.6V69.7C251.195 69.7 252.629 68.8333 253.895 67.1C253.762 66.3 252.329 65.9 249.595 65.9C249.329 65.9 248.995 65.9667 248.595 66.1C248.262 66.2333 247.962 66.3667 247.695 66.5C247.762 66.4333 247.795 66.3 247.795 66.1C247.795 65.7 247.429 65.3667 246.695 65.1C245.962 64.7667 245.395 64.6 244.995 64.6C244.595 64.6 244.029 64.7 243.295 64.9C242.629 65.1 242.062 65.2 241.595 65.2C241.729 64.9333 242.295 64.6 243.295 64.2C244.295 63.7333 244.962 63.4333 245.295 63.3L245.395 63.1ZM240.995 46.7L240.795 46.8L240.995 46.7ZM254.795 70.2C254.795 69.1333 254.495 68.5 253.895 68.3C253.562 68.5 253.229 68.8 252.895 69.2C252.629 69.5333 252.495 69.8667 252.495 70.2H254.795Z"/>
            </svg>
        </Link>
    )
}