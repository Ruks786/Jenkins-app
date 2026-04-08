pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:22.17.1-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                echo "Listing files..."
                ls -la

                echo "Node version:"
                node --version

                echo "NPM version:"
                npm --version

                echo "Installing dependencies..."
                npm install

                echo "Building Vite app..."
                npm run build

                echo "Final files:"
                ls -la
                '''
            }
        }
    }
}