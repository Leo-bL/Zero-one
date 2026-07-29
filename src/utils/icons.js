import {
  Database,
  Server,
  Code2,
  Sigma,
  BookOpen,
  Calculator,
  Monitor,
  FlaskConical,
  Globe,
  Cpu,
} from 'lucide-react';

// Maps the `icon` string stored in data/subjects.js to an actual lucide-react component.
export const SUBJECT_ICON_MAP = {
  Database,
  Server,
  Code2,
  Sigma,
  BookOpen,
  Calculator,
  Monitor,
  FlaskConical,
  Globe,
  Cpu,
};

export const getSubjectIcon = (name) => SUBJECT_ICON_MAP[name] || BookOpen;
