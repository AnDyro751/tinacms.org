import React from 'react'
import styled from 'styled-components'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useCMS } from 'tinacms'
import { Overlay } from '../ui'

interface DocsLayoutProps {
  children: any
}

export const DocsLayout = React.memo(({ children }: DocsLayoutProps) => {
  const cms = useCMS()
  const router = useRouter()
  return (
    <>
      <DefaultSeo
        openGraph={{
          url: 'https://tinacms.org' + router.asPath,
        }}
      />
      <DocsLayoutDiv isEditing={cms.enabled}>{children}</DocsLayoutDiv>
    </>
  )
})

interface DocsLayoutDivProps {
  isEditing: boolean
}

const DocsLayoutDiv = styled.div<DocsLayoutDivProps>`
  @media (min-width: 1000px) {
    position: relative;
    padding: 0 0 0 16rem;

    ${Overlay} {
      display: none;
    }
  }
`
