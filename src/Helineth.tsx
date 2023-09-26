import React, { useRef } from "react";
import {  Stack, Heading, Box, FormLabel, Input, Select, Button } from '@chakra-ui/react'
import { AlunoType } from "./AlunoType";
import db from "./database/bd";

export const Helineth = () => {
  const refNomeAluno = useRef<HTMLInputElement>(null);
  const refDataNascimento = useRef<HTMLInputElement>(null);
  const refMorada = useRef<HTMLInputElement>(null);
  const refSexo = useRef<HTMLInputElement>(null);



 async function handleSubmit() {

    const nomeAluno = refNomeAluno.current?.value as string
    const dataNascimento = refDataNascimento.current?.value as string
    const morada = refMorada.current?.value
    const sexo = refSexo.current?.value




    const data: AlunoType = {
      nomeAluno,
      dataNascimento,
      morada,
      sexo
    }
   // Insere o aluno na tabela 'alunos' usando Dexie.js
   await db.alunos.add(data);


   // onSaveAluno(data)
  }

 /* async function onSaveAluno(data: AlunoType) {
    const connection = await connectToDatabase();

   
    const query = 'INSERT INTO table_aluno (nomeAluno, dataNascimento, morada, sexo) VALUES (?, ?, ?, ?)';
  
    await connection.query(query, data);
  } */


  return (
    <Stack
      bg={'#fff'}
      px={'6'}
      py='8'
      borderRadius={'8'}
    >
      <Heading
        color='#000000'
        as='h2'
        fontWeight='700'
        lineHeight='160%'
        fontSize='28'
        textAlign={'center'}
      >
        Adicionar Aluno
      </Heading>

      <Box>
        <FormLabel
          fontWeight='400'
          lineHeight='160%'
          fontSize='14px'
        >
          Nome do Aluno
        </FormLabel>
        <Input
          minLength={3}
          pl='15px'
          h='45px'
          fontSize='15px'
          outline='none'
          type='text'
          borderRadius='4px'
          border='1px solid #dddddd'
          ref={refNomeAluno}

        />

        <FormLabel
          fontWeight='400'
          lineHeight='160%'
          fontSize='14px'
        >
          Data de nascimento
        </FormLabel>
        <Input
          ref={refDataNascimento}
          errorBorderColor='red.300'
          minLength={3}
          pl='15px'
          h='45px'
          fontSize='15px'
          outline='none'
          type='date'
          borderRadius='4px'
          border='1px solid #dddddd'
        />

        <FormLabel
          fontWeight='400'
          lineHeight='160%'
          fontSize='14px'
        >
          Morada
        </FormLabel>
        <Input
          pattern='[A-Za-z]+'
          pl='15px'
          h='45px'
          fontSize='15px'
          outline='none'
          type='text'
          borderRadius='4px'
          border='1px solid #dddddd'
          ref={refMorada}
          minLength={3}
        />

        <FormLabel
          fontWeight='400'
          lineHeight='160%'
          fontSize='14px'
        >
          Sexo
        </FormLabel>
        <Select 
          h='45px'
          fontSize='15px'
          outline='none'
          borderRadius='4px'
          border='1px solid #dddddd'
        //ref={refSexo}

        >
          <option value='feminino'>feminino</option>
          <option value='masculino'>masculino</option>

        </Select>


      </Box>

      <Button
        onClick={handleSubmit}
        bg='blue'
        color='#fff'
        w='full'
        loadingText='A registar...'
        fontWeight='700'
        borderRadius='6px'
        p={'6'}
        _hover={{
          bg: 'blue',
          color: '#fff',
        }}
      >
        Registar
      </Button>
    </Stack>
  );
};
