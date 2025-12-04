'use client'

import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function SelectExamples() {
  const [selectedFramework, setSelectedFramework] = useState<string>('')
  const [selectedTheme, setSelectedTheme] = useState<string>('light')

  return (
    <div className="space-y-8 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Select Component Examples</CardTitle>
          <CardDescription>
            Different ways to use the Select component in your portfolio
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Basic Select */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Basic Select</label>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select a framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="vue">Vue</SelectItem>
                <SelectItem value="angular">Angular</SelectItem>
                <SelectItem value="svelte">Svelte</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Controlled Select */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Controlled Select</label>
            <Select value={selectedFramework} onValueChange={setSelectedFramework}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Choose framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="vue">Vue</SelectItem>
                <SelectItem value="angular">Angular</SelectItem>
                <SelectItem value="svelte">Svelte</SelectItem>
              </SelectContent>
            </Select>
            {selectedFramework && (
              <p className="text-sm text-muted-foreground">
                Selected: {selectedFramework}
              </p>
            )}
          </div>

          {/* Select with Groups */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Select with Groups</label>
            <Select>
              <SelectTrigger className="w-[250px]">
                <SelectValue placeholder="Select a technology" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Frontend</SelectLabel>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="vue">Vue</SelectItem>
                  <SelectItem value="angular">Angular</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Backend</SelectLabel>
                  <SelectItem value="nodejs">Node.js</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Database</SelectLabel>
                  <SelectItem value="mongodb">MongoDB</SelectItem>
                  <SelectItem value="postgresql">PostgreSQL</SelectItem>
                  <SelectItem value="mysql">MySQL</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Small Size Select */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Small Size Select</label>
            <Select value={selectedTheme} onValueChange={setSelectedTheme}>
              <SelectTrigger size="sm" className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Disabled Select */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Disabled Select</label>
            <Select disabled>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Disabled select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Portfolio-specific Example: Project Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Portfolio Project Filter</label>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter projects" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Projects</SelectItem>
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="mobile">Mobile Apps</SelectItem>
                <SelectItem value="design">UI/UX Design</SelectItem>
                <SelectItem value="backend">Backend</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Portfolio-specific Example: Contact Form */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Project Type (Contact Form)</label>
            <Select>
              <SelectTrigger className="w-[250px]">
                <SelectValue placeholder="What type of project?" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Web Development</SelectLabel>
                  <SelectItem value="website">Website</SelectItem>
                  <SelectItem value="webapp">Web Application</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Mobile Development</SelectLabel>
                  <SelectItem value="ios">iOS App</SelectItem>
                  <SelectItem value="android">Android App</SelectItem>
                  <SelectItem value="crossplatform">Cross-platform App</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Other Services</SelectLabel>
                  <SelectItem value="consulting">Consulting</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="optimization">Optimization</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

        </CardContent>
      </Card>
    </div>
  )
}