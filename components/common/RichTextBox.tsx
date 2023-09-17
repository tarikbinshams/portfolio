import dynamic from "next/dynamic"; // Assuming you're using Next.js
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function RichTextEditor({
  description,
  setDescription,
}: {
  description?: any;
  setDescription: any;
}) {
  const [content, setContent] = useState("");

  const handleChange = (value: any) => {
    setContent(value);
    setDescription(value);
  };

  const toolbarOptions = [
    [{'header': '2'}],
    [{ size: ['normal'] }],
    ["bold", "italic", "underline", "strike"],
    [
      {
        color: [
          "#000000",
          "#e60000",
          "#ff9900",
          "#ffff00",
          "#008a00",
          "#0066cc",
          "#9933ff",
          "#ffffff",
        ],
      },
      {
        background: [
          "#000000",
          "#e60000",
          "#ff9900",
          "#ffff00",
          "#008a00",
          "#0066cc",
          "#9933ff",
          "#ffffff",
        ],
      },
    ],
    [
      {
        color: null, // Use null to represent the removal of color
      },
      {
        background: null, // Use null to represent the removal of background
      },
    ],
    ["link"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
  ];

  useEffect(() => {
    // Check if running in a browser environment
    if (typeof window !== "undefined") {
      if (description) {
        setContent(description);
      }
    }
  }, [description]);

  return (
    <ReactQuill
      value={content}
      onChange={handleChange}
      modules={{ toolbar: toolbarOptions }}
      style={{
        height: "240px",
        minHeight: "240px",
        // backgroundColor: "#ffffff",
        border: "none",
        color: "#000000",
      }}
      className="custom-quill"
    />
  );
}

export default RichTextEditor;
