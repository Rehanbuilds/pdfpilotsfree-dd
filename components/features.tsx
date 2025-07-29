"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, FileSpreadsheet, Presentation, ImageIcon, Archive, Layers, Code, Stamp } from "lucide-react"
import Link from "next/link"

export function Features() {
  const tools = [
    {
      id: "word-pdf",
      icon: FileText,
      title: "Word ↔ PDF",
      description: "Convert Word documents to PDF and vice versa",
      fromFormat: "DOCX",
      toFormat: "PDF",
    },
    {
      id: "excel-pdf",
      icon: FileSpreadsheet,
      title: "Excel ↔ PDF",
      description: "Convert Excel spreadsheets to PDF and vice versa",
      fromFormat: "XLSX",
      toFormat: "PDF",
    },
    {
      id: "ppt-pdf",
      icon: Presentation,
      title: "PowerPoint ↔ PDF",
      description: "Convert PowerPoint presentations to PDF and vice versa",
      fromFormat: "PPTX",
      toFormat: "PDF",
    },
    {
      id: "image-pdf",
      icon: ImageIcon,
      title: "Image ↔ PDF",
      description: "Convert images (JPG, PNG) to PDF and extract images from PDF",
      fromFormat: "JPG/PNG",
      toFormat: "PDF",
    },
    {
      id: "merge-pdf",
      icon: Layers,
      title: "Merge PDFs",
      description: "Combine multiple PDF files into a single document",
      fromFormat: "Multiple PDFs",
      toFormat: "Single PDF",
    },
    {
      id: "compress-pdf",
      icon: Archive,
      title: "Compress PDF",
      description: "Reduce PDF file size while maintaining quality",
      fromFormat: "PDF",
      toFormat: "Compressed PDF",
    },
    {
      id: "add-watermark",
      icon: Stamp,
      title: "Add Watermark",
      description: "Add custom text or image watermarks to your PDF documents",
      fromFormat: "PDF",
      toFormat: "Watermarked PDF",
    },
    {
      id: "html-pdf",
      icon: Code,
      title: "HTML to PDF",
      description: "Convert web pages or HTML code into high-quality PDF documents",
      fromFormat: "HTML",
      toFormat: "PDF",
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Powerful PDF Tools</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to work with PDF files. Convert, compress, merge, split, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tools.map((tool) => (
            <Card key={tool.id} className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-lg mb-4 mx-auto">
                  <tool.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-black">{tool.title}</CardTitle>
                <CardDescription className="text-gray-600">{tool.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <span className="text-sm text-gray-500">
                    {tool.fromFormat} → {tool.toFormat}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/tools">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-3">
              View All Tools
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
