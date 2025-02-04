'use client'

import { usePathname } from 'next/navigation'
import NextLink from 'next/link'
import { Flex, Heading, IconButton, Select, Tooltip } from '@radix-ui/themes'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import cs from 'classnames'
import { Link } from './Link'
import { FaAdjust, FaMoon, FaRegSun } from 'react-icons/fa'
import { HeaderUser } from './HeaderUser'
import { useTheme } from './Themes'
import { useCallback, useState } from 'react'
export interface HeaderProps {
  children?: React.ReactNode
  gitHubLink?: string
  ghost?: boolean
}

export const Header = ({ children, gitHubLink, ghost }: HeaderProps) => {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [show, setShow] = useState(false)

  const toggleNavBar = useCallback(() => {
    setShow((state) => !state)
  }, [])

  return (
    <header
      className={cs('block shadow-sm sticky top-0 dark:shadow-gray-500 py-3 px-4 z-20')}
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <Flex align="center" gap="3">
        <NextLink href="/">
          <Heading as="h2">Trancend.Ai</Heading>
        </NextLink>
        <Flex align="center" gap="3" className="ml-auto">
          <HeaderUser />
          <Select.Root value={theme} onValueChange={setTheme}>
            <Select.Trigger radius="full" />
            <Select.Content>
              <Select.Item value="light">
                <FaRegSun />
              </Select.Item>
              <Select.Item value="dark">
                <FaMoon />
              </Select.Item>
              <Select.Item value="system">
                <FaAdjust />
              </Select.Item>
            </Select.Content>
          </Select.Root>
        </Flex>
        <Tooltip content="Navigation">
          <IconButton
            size="3"
            variant="ghost"
            color="gray"
            className="md:hidden"
            onClick={toggleNavBar}
          >
            <HamburgerMenuIcon width="16" height="16" />
          </IconButton>
        </Tooltip>
      </Flex>
    </header>
  )
}
