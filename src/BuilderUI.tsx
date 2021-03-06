import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Input, Select } from '@chakra-ui/react';
import * as React from 'react';
import { PatchNoteBuilder } from './PatchNoteBuilder';

export const MainAccordion = ({ builder }: { builder: PatchNoteBuilder }) => {
    return (
        <Accordion allowToggle width="500px">
            <MetadataAccordion builder={builder} />
            <LineBreakAccordion builder={builder} />
            <TitleAccordion builder={builder} />
            <CategoryAccordion builder={builder} />
            <ContentAccordion builder={builder} />
            <DescriptionAccordion builder={builder} />
            <ImageAccordion builder={builder} />
            <BlockcontentAccordion builder={builder} />
            <TableAccordion builder={builder} />
            <FinalAccordion builder={builder} />
        </Accordion>
    )
}

const AccordionItemBase = ({ name, children }: { name: string, children: React.ReactNode }) => {
    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                        {name}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                {children}
            </AccordionPanel>
        </AccordionItem>
    )


}
const LineBreakAccordion = ({ builder }: { builder: PatchNoteBuilder }) => {
    return (
        <AccordionItemBase name="줄바꿈 추가">
            <Button onClick={() => builder.addLineBreak()}>
                Add
            </Button>
        </AccordionItemBase>

    )
}

const MetadataAccordion = ({ builder }: { builder: PatchNoteBuilder }) => {
    const [contentValue, setContentValue] = React.useState('')
    const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => setContentValue(event.target.value)

    return (
        <AccordionItemBase name="메타데이터 추가">
            <Input
                value={contentValue}
                onChange={handleContentChange}
                placeholder='content' />
            <Button onClick={() => builder.addMetadata(contentValue)}>
                Add
            </Button>
        </AccordionItemBase>
    )
}


const TitleAccordion = ({ builder }: { builder: PatchNoteBuilder }) => {
    const [contentValue, setContentValue] = React.useState('')
    const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => setContentValue(event.target.value)
    const [versionValue, setVersionValue] = React.useState('')
    const handleVersionChange = (event: React.ChangeEvent<HTMLInputElement>) => setVersionValue(event.target.value)
    return (
        <AccordionItemBase name="제목 추가">
            <Input
                placeholder='content'
                value={contentValue}
                onChange={handleContentChange}
            />
            <Input
                placeholder='version'
                value={versionValue}
                onChange={handleVersionChange} />
            <Button onClick={() => {
                builder.addTitle(contentValue, versionValue)
            }}>
                Add
            </Button>
        </AccordionItemBase>
    )
}

const CategoryAccordion = ({ builder }: { builder: PatchNoteBuilder }) => {
    const [contentValue, setContentValue] = React.useState('')
    const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => setContentValue(event.target.value)
    return (
        <AccordionItemBase name="카테고리 추가">
            <Input
                placeholder='content'
                value={contentValue}
                onChange={handleContentChange}
            />
            <Button onClick={() => {
                builder.addCategory(contentValue)
            }}>
                Add
            </Button>
        </AccordionItemBase>
    )
}

const ContentAccordion = ({ builder }: { builder: PatchNoteBuilder }) => {
    const [typeValue, setTypeValue] = React.useState('')
    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => setTypeValue(event.target.value)
    const [colorValue, setColorValue] = React.useState('')
    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => setColorValue(event.target.value)
    const [contentValue, setContentValue] = React.useState('')
    const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => setContentValue(event.target.value)
    return (
        <AccordionItemBase name="내용 추가">
            <Select id='type' placeholder='타입을 선택해주세요' onChange={handleTypeChange}>
                <option>plus</option>
                <option>minus</option>
                <option>check</option>
            </Select>
            <Input
                placeholder='color'
                value={colorValue}
                onChange={handleColorChange}
            />
            <Input
                placeholder='content'
                value={contentValue}
                onChange={handleContentChange}
            />
            <Button onClick={() => {
                builder.addContent(typeValue, colorValue, contentValue)
            }}>
                Add
            </Button>
        </AccordionItemBase>
    )
}

const DescriptionAccordion = ({ builder }: { builder: PatchNoteBuilder }) => {
    const [contentValue, setContentValue] = React.useState('')
    const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => setContentValue(event.target.value)

    return (
        <AccordionItemBase name="설명 추가">
            <Input
                value={contentValue}
                onChange={handleContentChange}
                placeholder='content' />
            <Button onClick={() => builder.addDescription(contentValue)}>
                Add
            </Button>
        </AccordionItemBase>
    )
}

const ImageAccordion = ({ builder }: { builder: PatchNoteBuilder }) => {
    const [altValue, setAltValue] = React.useState('')
    const handleAltChange = (event: React.ChangeEvent<HTMLInputElement>) => setAltValue(event.target.value)
    const [srcValue, setSrcValue] = React.useState('')
    const handleSrcChange = (event: React.ChangeEvent<HTMLInputElement>) => setSrcValue(event.target.value)
    return (
        <AccordionItemBase name="이미지 추가">
            <Input
                placeholder='alt'
                value={altValue}
                onChange={handleAltChange}
            />
            <Input
                placeholder='src'
                value={srcValue}
                onChange={handleSrcChange}
            />
            <Button onClick={() => {
                builder.addImage(altValue, srcValue)
            }}>
                Add
            </Button>
        </AccordionItemBase>
    )
}

const BlockcontentAccordion = ({ builder }: { builder: PatchNoteBuilder }) => {
    const [contentValue, setContentValue] = React.useState('')
    const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => setContentValue(event.target.value)

    return (
        <AccordionItemBase name="인용문 추가">
            <Input
                value={contentValue}
                onChange={handleContentChange}
                placeholder='content' />
            <Button onClick={() => builder.addBlockcontent(contentValue)}>
                Add
            </Button>
        </AccordionItemBase>
    )
}

const Item = ({ inputsRef, refKey }: { inputsRef: React.MutableRefObject<Array<HTMLInputElement | null>>, refKey: number }) => {
    const [contentValue, setContentValue] = React.useState('')
    const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => { setContentValue(event.target.value) }
    return (
        <Input
            ref={(element) => {
                if (element)
                    inputsRef.current[refKey] = element
            }}
            marginBottom="20px"
            value={contentValue}
            onChange={handleContentChange}
            placeholder='content'
        />
    )
}

const TableAccordion = ({ builder }: { builder: PatchNoteBuilder }) => {
    const [itemElements, setItemElements] = React.useState<JSX.Element[]>([])
    const [key, setKey] = React.useState<number>(0)
    const inputs = React.useRef<HTMLInputElement[]>([]);

    return (
        <AccordionItemBase name="테이블 추가">
            {itemElements}
            <Flex justifyContent="space-between">
                <Button onClick={() => {
                    builder.addTable(inputs.current.map(input => input.value))
                }}>
                    Add
                </Button>
                <Flex>
                    <Button onClick={() => {
                        setKey(key + 1)
                        setItemElements(itemElements => [...itemElements, <Item key={key} inputsRef={inputs} refKey={key} />])
                    }}>+</Button>
                    <Button onClick={() => {
                        setKey(key - 1)
                        setItemElements(itemElements => itemElements.slice(0, -1))
                        inputs.current.pop()
                    }}>-</Button>
                </Flex>
            </Flex>
        </AccordionItemBase>
    )
}

const FinalAccordion = ({ builder }: { builder: PatchNoteBuilder }) => {
    return (
        <AccordionItemBase name="패치노트 마무리">
            <Button onClick={() => builder.addFinal()}>
                Add
            </Button>
        </AccordionItemBase>
    )
}
