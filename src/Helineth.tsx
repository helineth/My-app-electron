import React, { useEffect, useRef, useState } from "react";
import { Stack, Heading, Box, FormLabel, Input, Select, Button } from '@chakra-ui/react'
import { AlunoType } from "./AlunoType";
import Peer from 'simple-peer';


export const Helineth = () => {
  const refNomeAluno = useRef<HTMLInputElement>(null);
  const refDataNascimento = useRef<HTMLInputElement>(null);
  const refMorada = useRef<HTMLInputElement>(null);
  const refSexo = useRef<HTMLInputElement>(null);
  const [peer, setPeer] = useState('');


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


    const conn = this.state.peer.connect(this.state.friendId);
    conn.on('open', () => {
      const msgObj = {
        remetente: this.state.myId,
        mensagem: this.state.message
      };
      conn.send(msgObj);
      this.setState({
        mensagens: [...this.state.messages, msgObj],
        mensagem: 'olá Liria'
      });
    });

    // onSaveAluno(data)
  }




  useEffect(() => {
    const p = new Peer({ trickle: false });

    p.on('signal', (data) => {
      console.log('Sinal enviado:', JSON.stringify(data));
    });

    p.on('connect', () => {
      console.log('Conexão estabelecida');
      p.send('Olá, outra aplicação!');
    });


    p.on('data', (mensagem) => {
      console.log('Mensagem recebida:', mensagem.toString());
      setPeer(mensagem.toString())
      // Você pode definir o estado aqui para exibir a mensagem na renderização
    });
  }, []);

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
        Adicionar Aluno {peer}
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
