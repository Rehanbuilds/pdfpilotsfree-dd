"use client"

import React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Upload, Download, FileText, CheckCircle, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Tool {
  id: string
  icon: any
  title: string
  description: string
  fromFormat: string
  toFormat: string
}

interface PDFConverterProps {
  tool: Tool
}

export function PDFConverter({ tool }: PDFConverterProps) {
  const [file, setFile] = useState<File | null>(null)
  const [isConverting, setIsConverting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [convertedFile, setConvertedFile] = useState<{
    name: string
    blob: Blob
    url: string
  } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setError(null)
      setConvertedFile(null)
      setProgress(0)
    }
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const droppedFile = event.dataTransfer.files[0]
    if (droppedFile) {
      setFile(droppedFile)
      setError(null)
      setConvertedFile(null)
      setProgress(0)
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const generateConvertedFile = (originalFile: File, tool: Tool): { name: string; blob: Blob } => {
    // Generate appropriate file extension based on tool
    let extension = ""
    let mimeType = ""
    let sampleContent = ""

    const baseName = originalFile.name.replace(/\.[^/.]+$/, "")

    switch (tool.toFormat.toLowerCase()) {
      case "pdf":
        extension = ".pdf"
        mimeType = "application/pdf"
        sampleContent = `This is a converted PDF from ${tool.fromFormat}.\n\nOriginal file: ${originalFile.name}\nConverted on: ${new Date().toLocaleString()}\nTool used: ${tool.title}\n\nThis is a demo file created by PDF Pilot.`
        break
      case "docx":
        extension = ".docx"
        mimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        sampleContent = `This is a converted DOCX from ${tool.fromFormat}.\n\nOriginal file: ${originalFile.name}\nConverted on: ${new Date().toLocaleString()}\nTool used: ${tool.title}\n\nThis is a demo file created by PDF Pilot.`
        break
      case "xlsx":
        extension = ".xlsx"
        mimeType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        sampleContent = `This is a converted XLSX from ${tool.fromFormat}.\n\nOriginal file: ${originalFile.name}\nConverted on: ${new Date().toLocaleString()}\nTool used: ${tool.title}\n\nThis is a demo file created by PDF Pilot.`
        break
      case "pptx":
        extension = ".pptx"
        mimeType = "application/vnd.openxmlformats-officedocument.presentationml.presentation"
        sampleContent = `This is a converted PPTX from ${tool.fromFormat}.\n\nOriginal file: ${originalFile.name}\nConverted on: ${new Date().toLocaleString()}\nTool used: ${tool.title}\n\nThis is a demo file created by PDF Pilot.`
        break
      case "epub":
        extension = ".epub"
        mimeType = "application/epub+zip"
        sampleContent = `This is a converted ePub from ${tool.fromFormat}.\n\nOriginal file: ${originalFile.name}\nConverted on: ${new Date().toLocaleString()}\nTool used: ${tool.title}\n\nThis is a demo file created by PDF Pilot.`
        break
      case "txt":
        extension = ".txt"
        mimeType = "text/plain"
        sampleContent = `This is a converted TXT from ${tool.fromFormat}.\n\nOriginal file: ${originalFile.name}\nConverted on: ${new Date().toLocaleString()}\nTool used: ${tool.title}\n\nThis is a demo file created by PDF Pilot.`
        break
      case "zip":
        extension = ".zip"
        mimeType = "application/zip"
        sampleContent = `This is a converted ZIP from ${tool.fromFormat}.\n\nOriginal file: ${originalFile.name}\nConverted on: ${new Date().toLocaleString()}\nTool used: ${tool.title}\n\nThis is a demo file created by PDF Pilot.`
        break
      case "csv":
        extension = ".csv"
        mimeType = "text/csv"
        sampleContent = `col1,col2,col3\nvalue1,value2,value3\nconverted,from,${tool.fromFormat}`
        break
      case "json":
        extension = ".json"
        mimeType = "application/json"
        sampleContent = JSON.stringify(
          {
            convertedFrom: tool.fromFormat,
            originalFileName: originalFile.name,
            convertedOn: new Date().toLocaleString(),
            toolUsed: tool.title,
            message: "This is a demo JSON file created by PDF Pilot.",
          },
          null,
          2,
        )
        break
      case "compressed pdf":
        extension = "_compressed.pdf"
        mimeType = "application/pdf"
        sampleContent = `This is a compressed PDF from ${tool.fromFormat}.\n\nOriginal file: ${originalFile.name}\nConverted on: ${new Date().toLocaleString()}\nTool used: ${tool.title}\n\nThis is a demo file created by PDF Pilot.`
        break
      case "single pdf":
        extension = "_merged.pdf"
        mimeType = "application/pdf"
        sampleContent = `This is a merged PDF from ${tool.fromFormat}.\n\nOriginal file: ${originalFile.name}\nConverted on: ${new Date().toLocaleString()}\nTool used: ${tool.title}\n\nThis is a demo file created by PDF Pilot.`
        break
      case "watermarked pdf":
        extension = "_watermarked.pdf"
        mimeType = "application/pdf"
        sampleContent = `This is a watermarked PDF from ${tool.fromFormat}.\n\nOriginal file: ${originalFile.name}\nConverted on: ${new Date().toLocaleString()}\nTool used: ${tool.title}\n\nThis is a demo file created by PDF Pilot.`
        break
      default:
        extension = ".pdf"
        mimeType = "application/pdf"
        sampleContent = `This is a converted file from ${tool.fromFormat} to ${tool.toFormat}.\n\nOriginal file: ${originalFile.name}\nConverted on: ${new Date().toLocaleString()}\nTool used: ${tool.title}\n\nThis is a demo file created by PDF Pilot.`
    }

    const convertedFileName = `${baseName}${extension}`
    const blob = new Blob([sampleContent], { type: mimeType })

    return { name: convertedFileName, blob }
  }

  const simulateConversion = async () => {
    setIsConverting(true)
    setError(null)

    try {
      // Simulate conversion progress
      for (let i = 0; i <= 100; i += 10) {
        setProgress(i)
        await new Promise((resolve) => setTimeout(resolve, 200))
      }

      // Generate the converted file
      const { name, blob } = generateConvertedFile(file!, tool)
      const url = URL.createObjectURL(blob)

      setConvertedFile({ name, blob, url })

      toast({
        title: "Conversion Complete!",
        description: `Your file has been successfully converted to ${tool.toFormat}.`,
      })
    } catch (err) {
      setError("Conversion failed. Please try again.")
      toast({
        title: "Conversion Failed",
        description: "There was an error converting your file. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsConverting(false)
    }
  }

  const handleDownload = () => {
    if (!convertedFile) return

    try {
      // Create a temporary anchor element for download
      const link = document.createElement("a")
      link.href = convertedFile.url
      link.download = convertedFile.name

      // Append to body, click, and remove
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      toast({
        title: "Download Started",
        description: `${convertedFile.name} is being downloaded to your device.`,
      })

      // Track download analytics (in real app)
      console.log(`File downloaded: ${convertedFile.name}`)
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "There was an error downloading your file. Please try again.",
        variant: "destructive",
      })
    }
  }

  const resetConverter = () => {
    setFile(null)
    if (convertedFile) {
      URL.revokeObjectURL(convertedFile.url) // Clean up blob URL
    }
    setConvertedFile(null)
    setProgress(0)
    setError(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  // Clean up blob URL when component unmounts or file changes
  React.useEffect(() => {
    return () => {
      if (convertedFile) {
        URL.revokeObjectURL(convertedFile.url)
      }
    }
  }, [convertedFile])

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-lg mb-4 mx-auto">
          {tool.icon && <tool.icon className="h-6 w-6" />}
        </div>
        <CardTitle className="text-2xl font-bold text-black">{tool.title}</CardTitle>
        <CardDescription className="text-gray-600">{tool.description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {!file && (
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-lg font-medium text-gray-700 mb-2">Drop your {tool.fromFormat} file here</p>
            <p className="text-gray-500 mb-4">or click to browse</p>
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white bg-transparent"
            >
              Choose File
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={handleFileSelect}
              accept={
                tool.fromFormat === "JPG/PNG"
                  ? ".jpg,.jpeg,.png"
                  : tool.fromFormat === "DOCX"
                    ? ".doc,.docx"
                    : tool.fromFormat === "XLSX"
                      ? ".xls,.xlsx"
                      : tool.fromFormat === "PPTX"
                        ? ".ppt,.pptx"
                        : tool.fromFormat === "TXT"
                          ? ".txt"
                          : tool.fromFormat === "CSV"
                            ? ".csv"
                            : tool.fromFormat === "ZIP"
                              ? ".zip"
                              : tool.fromFormat === "JSON"
                                ? ".json"
                                : tool.fromFormat === "HTML"
                                  ? ".html"
                                  : tool.fromFormat === "Multiple PDFs"
                                    ? ".pdf"
                                    : ".pdf"
              }
              multiple={tool.fromFormat === "Multiple PDFs"}
            />
          </div>
        )}

        {file && !convertedFile && (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8 text-gray-600" />
                <div>
                  <p className="font-medium text-gray-900">{file.name}</p>
                  <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <Button variant="ghost" onClick={resetConverter}>
                Remove
              </Button>
            </div>

            {isConverting && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Converting...</span>
                  <span className="text-sm text-gray-500">{progress}%</span>
                </div>
                <Progress value={progress} className="w-full" />
              </div>
            )}

            {error && (
              <div className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="h-5 w-5 text-red-500" />
                <p className="text-red-700">{error}</p>
              </div>
            )}

            <Button
              onClick={simulateConversion}
              disabled={isConverting}
              className="w-full bg-black text-white hover:bg-gray-800"
            >
              {isConverting ? "Converting..." : `Convert to ${tool.toFormat}`}
            </Button>
          </div>
        )}

        {convertedFile && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 p-3 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <p className="text-green-700">Conversion completed successfully!</p>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8 text-gray-600" />
                <div>
                  <p className="font-medium text-gray-900">{convertedFile.name}</p>
                  <p className="text-sm text-gray-500">
                    {(convertedFile.blob.size / 1024).toFixed(2)} KB • Ready for download
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button onClick={handleDownload} className="flex-1 bg-black text-white hover:bg-gray-800">
                <Download className="mr-2 h-4 w-4" />
                Download {tool.toFormat}
              </Button>
              <Button
                variant="outline"
                onClick={resetConverter}
                className="border-black text-black hover:bg-black hover:text-white bg-transparent"
              >
                Convert Another
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
