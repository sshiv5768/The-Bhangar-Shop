
pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub')
	}

    stages{
        
		  stage('Build Image') {

			steps {
				sh 'docker build -t sshiv6353/the-bhangar-shop:latest .'
			}
		}
    
		stage('Login DockerHub') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh 'docker push sshiv6353/the-bhangar-shop:latest'
			}
		}
    }
	post {
		always {
			sh 'docker logout'
		}
	}

}