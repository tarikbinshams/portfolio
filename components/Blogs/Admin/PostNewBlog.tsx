import { BlogServiceInstance } from "@app/blog/services/BlogService";
import FileUploader from "@components/common/FileUploader";
import RichTextEditor from "@components/common/RichTextBox";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useMutation } from "react-query";
import { nan } from "zod";

const fileTypes = ["JPG", "PNG", "GIF"];
export default function PostNewBlog() {
  const router = useRouter();
  const richTextRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [emptyField, setEmptyField] = React.useState<any>();

  useEffect(() => {
    const handleClickInside = () => {
      setIsFocused(true);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (richTextRef.current && !richTextRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    const divElement = richTextRef.current;

    if (divElement) {
      divElement.addEventListener("click", handleClickInside);
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      if (divElement) {
        divElement.removeEventListener("click", handleClickInside);
      }

      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [category, setCategory] = useState("");
  const [readingTime, setReadingTime] = useState<any>();
  const [showCategoryOptions, setShowCategoryOptions] = useState(false);
  const [image, setImage] = useState<any>(null);
  const categoryDropDownRef = useRef<HTMLDivElement>(null);

  const handleSelectCategory = (option: string) => {
    setShowCategoryOptions(false);
    setCategory(option);
  };

  const [tagValue, setTagValue] = useState("");

  const handleInputChange = (event: any) => {
    setTagValue(event.target.value);
  };

  const handleInputKeyDown = (event: any) => {
    if (event.key === "Enter" && tagValue.trim() !== "") {
      setTags([...tags, tagValue.trim()]);
      setTagValue("");
    }
  };

  const handleChipDelete = (chipIndex: any) => {
    const updatedChips = [...tags];
    updatedChips.splice(chipIndex, 1);
    setTags(updatedChips);
  };

  const handleSubmit = async () => {
    let tagString = "";
    setLoading(true);
    if (!title) {
      setEmptyField("Title");
      setLoading(false);
      return;
    }

    if (tags.length === 0) {
      setEmptyField("Tags");
      setLoading(false);
      return;
    } else {
      tagString = tags.join(",");
    }

    if (!description) {
      setEmptyField("Description");
      setLoading(false);
      return;
    }

    if (!category) {
      setEmptyField("Category");
      setLoading(false);
      return;
    }

    if (!readingTime) {
      setEmptyField("Reading Time");
      setLoading(false);
      return;
    }

    if (!image) {
      setEmptyField("Image");
      setLoading(false);
      return;
    } else {
      const fileExtension = image?.name.split(".").pop();
      if (!fileTypes.includes(fileExtension.toUpperCase())) {
        return;
      }
    }

    const formData = new FormData();
    if (image) {
      formData.append("files", image);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("tags", tagString);
      formData.append("reading_time", readingTime);
      formData.append("is_active", "true");
    }
    mutation.mutate(formData);
  };

  const mutation = useMutation({
    mutationFn: (data: any) => BlogServiceInstance.createNewBlog(data),
    onMutate: (variables) => {
      setLoading(true);
    },
    onError: (error, variables, context) => {
      setLoading(false);
      // router.push("/admin/view-all");
    },
    onSuccess: async () => {
      router.push("/admin/blogs");
    },
  });

  return (
    <div className="t-w-full t-shadow-[0px_3px_20px_1px_rgba(0,0,0,0.15)] t-rounded-[6px] t-px-6 lg:t-px-20 t-py-4">
      <p className="t-text-[#cdcdcd] t-text-[18px]">Admin Panel</p>
      <p className="t-text-[#2B79D3] t-text-[24px] t-py-4 t-border-b-2 t-border-[#2B79D3]">
        Create Blog Post
      </p>
      <div className="t-my-8">
        <div className="t-grid lg:t-flex t-gap-8">
          <div className="t-relative t-w-[100%] lg:t-w-[60%]">
            <input
              id="inputField"
              type="text"
              className="t-w-full t-h-[46px] t-border t-border-[#7E7982] t-rounded-lg t-px-2 t-py-1 t-bg-transparent focus:t-outline-none focus:t-ring-1 focus:t-border-[#2B79D3]"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label
              htmlFor="inputField"
              className="t-absolute t-left-3 t-top-[-12px] t-font-[sans-regular] t-bg-[#F7F4FE] t-text-[#7E7982] t-px-1"
            >
              Title
            </label>
          </div>
          <div className="t-relative t-w-[100%] lg:t-w-[40%]">
            <input
              id="inputField"
              type="text"
              className="t-w-full t-h-[46px] t-border t-border-[#7E7982] t-rounded-lg t-px-2 t-py-1 t-bg-transparent focus:t-outline-none focus:t-ring-1 focus:t-border-[#2B79D3]"
              value={tagValue}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
            />
            <label
              htmlFor="inputField"
              className="t-absolute t-left-3 t-top-[-12px] t-font-[sans-regular] t-bg-[#F7F4FE] t-text-[#7E7982] t-px-1"
            >
              Tags
            </label>
            <div className="t-flex t-absolute t-top-[16px] t-right-2 ">
              {tags.map((tag, index) => (
                <div
                  onClick={() => handleChipDelete(index)}
                  key={index}
                  className="t-relative t-cursor-pointer"
                >
                  <div className="t-mx-1.5 t-font-[sans-regular] t-text-[11px] t-border t-border-[#bdbdbd] t-px-[6px] t-rounded-[4px]">
                    {tag}
                  </div>
                  <svg
                    className="t-absolute t-top-[-8px] t-right-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4a4a4a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={richTextRef}
          className={`t-mt-8 t-border ${
            isFocused ? "t-border-[#2B79D3] t-ring-1" : "t-border-[#7E7982]"
          } t-rounded-lg t-h-[310px] t-pt-4 t-relative`}
        >
          <RichTextEditor description={description} setDescription={setDescription} />
          <label
            htmlFor="inputField"
            className="t-absolute t-font-[sans-regular] t-left-3 t-top-[-12px] t-bg-[#F7F4FE] t-text-[#7E7982] t-px-1"
          >
            Content
          </label>
        </div>

        <div className="t-grid t-grid-cols-1 lg:t-grid-cols-6 lg:t-gap-20 t-mt-8">
          <div className="t-col-span-2">
            <div className="t-relative t-z-20">
              <input
                onClick={() => setShowCategoryOptions(!showCategoryOptions)}
                id="inputField"
                type="button"
                className="t-w-full t-h-[46px] t-border t-border-[#7E7982] t-rounded-lg t-text-left t-px-4 t-py-1 t-cursor-pointer t-bg-transparent focus:t-outline-none focus:t-ring-1 focus:t-border-[#2B79D3]"
                value={category ? category : "Select"}
              />
              <svg
                onClick={() => setShowCategoryOptions(!showCategoryOptions)}
                className="t-absolute t-top-4 t-right-4 t-cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4a4a4a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
              <label
                htmlFor="inputField"
                className="t-absolute t-left-3 t-top-[-12px] t-font-[sans-regular] t-bg-[#F7F4FE] t-text-[#7E7982] t-px-1"
              >
                Category
              </label>
              {showCategoryOptions && (
                <div
                  ref={categoryDropDownRef}
                  className="t-absolute t-z-20 t-top-[3.25rem] t-bg-[#F7F4FE] t-border t-border-[#A79A9F] t-rounded-[7px] t-pl-4 t-pr-2 t-py-1 t-w-full"
                >
                  <div className="t-h-[110px] t-w-full t-overflow-y-auto t-scrollbar-thumb-rounded-xl t-scrollbar-track-rounded-xl t-scrollbar-h-auto t-scrollbar-thin t-scrollbar-thumb-custom t-scrollbar-track-[#DBECFF] t-scrollbar-thumb-[#2B79D3]">
                    <ul className="t-text-[14px]">
                      <li
                        onClick={() => handleSelectCategory("Blockchain")}
                        className="t-cursor-pointer t-py-1"
                      >
                        Blockchain
                      </li>
                      <li
                        onClick={() => handleSelectCategory("Frontend")}
                        className="t-cursor-pointer t-py-1"
                      >
                        Frontend
                      </li>
                      <li
                        onClick={() => handleSelectCategory("Backend")}
                        className="t-cursor-pointer t-py-1"
                      >
                        Backend
                      </li>
                      <li
                        onClick={() => handleSelectCategory("Database")}
                        className="t-cursor-pointer t-py-1"
                      >
                        Database
                      </li>
                      <li
                        onClick={() => handleSelectCategory("Others")}
                        className="t-cursor-pointer t-py-1"
                      >
                        Others
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div className="t-relative t-mt-8 t-w-full t-z-10">
              <input
                id="inputField"
                type="number"
                className="t-w-full t-h-[46px] t-border t-border-[#7E7982] t-rounded-lg t-px-2 t-py-1 t-bg-transparent focus:t-outline-none focus:t-ring-1 focus:t-border-[#2B79D3]"
                value={readingTime}
                onChange={(e) => setReadingTime(e.target.value)}
                min={1}
              />
              <label
                htmlFor="inputField"
                className="t-absolute t-font-[sans-regular] t-left-3 t-top-[-12px] t-bg-[#F7F4FE] t-text-[#7E7982] t-px-1"
              >
                Reading Time
              </label>
            </div>
          </div>
          <div className="t-col-span-4 lg:t-mt-0 t-mt-8">
            <FileUploader file={setImage} />
          </div>
        </div>

        <div className="t-border-t-2 t-border-[#2B79D3] t-pt-6 t-flex t-justify-between t-px-2 t-mt-8">
          <span
            onClick={() => router.push("/admin/blogs")}
            className="t-px-6 t-py-1.5 t-rounded-[7px] t-cursor-pointer t-bg-[#DBECFF] t-text-[#2B79D3] t-font-[400]"
          >
            Cancel
          </span>

          {emptyField && (
            <div className="t-text-red-500">{`${emptyField} ${
              readingTime && readingTime < 0
                ? "should be a positive number"
                : "field should not be empty"
            }`}</div>
          )}

          <button
            disabled={loading}
            onClick={handleSubmit}
            className="t-px-6 t-py-1.5 t-rounded-[7px] t-cursor-pointer t-bg-[#2B79D3] t-text-white t-font-[400]"
          >
            {loading ? "Loading..." : "Publish"}
          </button>
        </div>
      </div>
    </div>
  );
}
