//CLI Application
const readline=require('readline')
const fileManager=require('./fileManager')

//CLI interface
const rl=readline.createInterface({input:process.stdin, output:process.stdout})
//Menu
const Menu=`
1. Create a File
2. Read a File
3. Rename a File
4. Delete a File
5. List Files
6. Exit
`;
const main=()=>{
    rl.question(Menu, (choice)=>{
        switch(choice.trim()){
            case '1':
                rl.question('Enter file Name: ', (fileName)=>{
                    rl.question('Enter file content: ', (content)=>{
                        fileManager.createFile(fileName, content);
                        main();
                    })
                })
                break;
            case '2':
                rl.question('Enter file name to read: ', (fileName)=>{
                    fileManager.readFile(fileName)
                    main();
                })
                break;
            case '3':
                rl.question('Enter current file name: ', (oldName)=>{
                    rl.question('Enter new file name: ', (newName)=>{
                        fileManager.renameFile(oldName, newName);
                        main()
                    })
                })
                break;
            case '4':
                rl.question('Enter file name to delete',(fileName)=>{
                    fileManager.deleteFiles(fileName)
                    main()
                })
                break;
            case '5':;
            rl.question('Enter directory (default: ./): ', (directory)=>{
                fileManager.listFiles(directory || './')
                main()
            })
                break;
            case '6':
                console.log('Exiting File Management System. Goodbye!')
                rl.close()
                break;
            default:
                console.log('Invalid choice. Please try again')
                main()
        }
    })
}
main();