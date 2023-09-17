import config from '@config/app-config';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useRouter } from 'next/router';
import { removeDoubleSlashFromUrl } from 'utils/removeSlashFromUrl';

interface FileUploaderProps {
    // Add any additional props as needed
    file: any;
    currentFile?: any;
}

const FileUploader: React.FC<FileUploaderProps> = ({ file, currentFile }: { file: any, currentFile?: any}) => {
    const router = useRouter();
    const [currentFileState, setCurrentFileState] = useState<any>(currentFile);
    const [files, setFiles] = useState<any>([]);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const onDrop = useCallback((acceptedFiles: any) => {
        // Handle the uploaded files here
        file(acceptedFiles);
        setFiles(acceptedFiles);

        if (acceptedFiles.length > 0) {
            const selected = acceptedFiles[0];
            setSelectedFile(selected);
            file(selected);

            const reader = new FileReader();
            reader.onload = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(selected);
        }
    }, [file]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const handleClick = (event: any) => {
        event.stopPropagation();
    };

    const handleCurrentFileClose = () => {
        setCurrentFileState(null);
    }

    const handleFileClose = () => {
        setFiles([]);
        setPreviewUrl(null);
        setSelectedFile(null);
    }

    return (
        <>
            <div className="t-flex t-items-center t-justify-center t-w-full t-mt-0 t-relative">
                {
                    files.length < 1 && !currentFileState &&
                    <label
                        className={`t-flex t-flex-col t-items-center t-justify-center t-w-full ${router.pathname === "/admin/blogs/post" && "t-h-80"} ${router.pathname === "/admin/employers" && "t-h-56"} t-border t-border-[#7E7982] t-rounded-lg t-bg-transparent t-text-[#000000] ${isDragActive ? 't-bg-[#31234c01]' : ''}`}
                        {...getRootProps()}
                        onClick={handleClick}
                    >
                        <div className="t-flex t-flex-col t-items-center t-justify-center t-pt-5 t-pb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none">
                                <path d="M39 9.75C28.9575 9.75 21.06 17.3794 19.9558 27.1172C17.8319 27.4594 15.84 28.3696 14.191 29.7512C12.542 31.1329 11.2973 32.9347 10.5885 34.9659C4.59225 36.6941 0 42.042 0 48.75C0 56.8522 6.52275 63.375 14.625 63.375H63.375C71.4772 63.375 78 56.8522 78 48.75C78 44.46 75.9159 40.6185 72.8959 37.9324C72.3304 29.367 65.4981 22.5323 56.901 22.0886C53.9663 14.9492 47.2339 9.75 39 9.75ZM39 14.625C45.7324 14.625 51.1144 18.9394 53.0156 25.0575L53.5519 26.8125H56.0625C62.7778 26.8125 68.25 32.2847 68.25 39V40.2188L69.2396 40.9817C70.434 41.8971 71.4045 43.0722 72.0777 44.418C72.7508 45.7639 73.109 47.2453 73.125 48.75C73.125 54.2977 68.9228 58.5 63.375 58.5H14.625C9.07725 58.5 4.875 54.2977 4.875 48.75C4.875 43.8262 8.40938 40.0042 12.87 39.2291L14.4714 38.9244L14.7761 37.3206C15.5074 34.0373 18.4177 31.6875 21.9375 31.6875H24.375V29.25C24.375 21.0356 30.7856 14.625 39 14.625ZM39 28.2604L37.245 29.9349L27.495 39.6849L31.005 43.1949L36.5625 37.6277V53.625H41.4375V37.6277L46.995 43.1901L50.505 39.6801L40.755 29.9301L39 28.2604Z" fill="#7E7982" />
                            </svg>
                            {
                                isDragActive ?
                                    <p className="t-text-[12px] t-text-[#000000]">Drop the files here ...</p> :
                                    <div className=''>
                                        <p className="t-text-[13px] t-text-[#000000] t-font-[400] t-mt-2 t-text-center t-leading-5">Click to Upload or drag and drop</p>
                                        <p className="t-text-[13px] t-text-[#000000] t-font-[400] t-mt-0 t-text-center t-leading-5">SVG, PNG, JPG or GIF</p>
                                    </div>
                            }
                        </div>
                        <input id="dropzone-file" type="file" className="t-hidden" {...getInputProps()} />
                    </label>
                }
                {
                    currentFileState &&
                    <div className='t-mt-4 t-relative'>
                        <svg onClick={handleCurrentFileClose} 
                        className={`t-absolute t-top-1 ${router.pathname === "/admin/blogs/post" && "t-left-[250px]"} ${router.pathname === "/admin/employers" && "t-left-[180px]"} t-cursor-pointer`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        <img src={removeDoubleSlashFromUrl(currentFile)} alt="File preview" className={`${router.pathname === "/admin/blogs/post" && "t-w-[250px]"} ${router.pathname === "/admin/employers" && "tt-w-[180px]"}  t-h-[160px]`} />
                    </div >
                }
                <label
                    htmlFor="inputField"
                    className="t-absolute t-font-[sans-regular] t-left-3 t-top-[-12px] t-bg-[#F7F4FE] t-text-[#7E7982] t-px-1"
                >
                    Image
                </label>
            </div>
            {
                files.length > 0 &&
                <div className='t-mt-4 t-flex t-justify-center'>
                    <div className='t-relative'>
                        <svg onClick={handleFileClose} className={`t-absolute t-top-1 ${router.pathname === "/admin/blogs/post" && "t-left-[250px]"} ${router.pathname === "/admin/employers" && "t-left-[180px]"} t-cursor-pointer`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        {previewUrl && <img src={previewUrl} alt="File preview" className='t-w-[200px] t-h-[160px]' />}
                    </div >
                </div>
            }
        </>
    );
};

export default FileUploader;