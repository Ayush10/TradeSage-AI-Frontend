"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Download,
  Play,
  Pause,
  Volume2
} from "lucide-react";

interface MessageAttachmentProps {
  file: File;
}

export default function MessageAttachment({ file }: MessageAttachmentProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  const isImage = file.type.startsWith('image/');
  const isAudio = file.type.startsWith('audio/');
  const isDocument = file.type.includes('pdf') || file.type.includes('doc');

  const handleDownload = () => {
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const toggleAudio = () => {
    if (!audioElement) {
      const audio = new Audio(URL.createObjectURL(file));
      audio.addEventListener('ended', () => setIsPlaying(false));
      setAudioElement(audio);
      audio.play();
      setIsPlaying(true);
    } else {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (isImage) {
    return (
      <div className="relative w-48 h-48 rounded-lg overflow-hidden">
        <Image
          src={URL.createObjectURL(file)}
          alt={file.name}
          fill
          className="object-cover"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-black/50 hover:bg-black/70"
          onClick={handleDownload}
        >
          <Download className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  if (isAudio) {
    return (
      <div className="flex items-center gap-2 bg-muted rounded-lg p-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleAudio}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
        <Volume2 className="h-4 w-4" />
        <span className="text-sm">{file.name}</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleDownload}
        >
          <Download className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  if (isDocument) {
    return (
      <div className="flex items-center gap-2 bg-muted rounded-lg p-3">
        <FileText className="h-4 w-4" />
        <span className="text-sm">{file.name}</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleDownload}
        >
          <Download className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return null;
}