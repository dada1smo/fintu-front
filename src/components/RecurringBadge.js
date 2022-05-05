import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { RecurringIcon } from '../images/Icons';
import { ContainerBadge, TypeBadge } from '../styles/Details.styles';
import Category from './Category';

export default function RecurringBadge() {
  return <Category title="Mensal" color="#FFFFFF" />;
}
