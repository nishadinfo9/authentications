import React from 'react'
import { Editor } from '@tinymce/tinymce-react'

const RTESample = () => {
  return (
    <div>
      <Editor
      initialValue='welcome'
      init={{
        initialValue: 'welcome',
        menubar: true,
        height: 500,
        plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar: true,
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            
      }}
      />
    </div>
  )
}

export default RTESample